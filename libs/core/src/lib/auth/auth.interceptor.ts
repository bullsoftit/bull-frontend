import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AuthState } from './store/auth.state';
import { ApiErrorCodes } from '@bullsoft-frontend/api-interfaces';
import { AuthConfig } from './config/auth-config';

/**
 * Interceptor de peticiones HTTP que resuelve operaciones de autenticación.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        @Inject('authConfig')
        private authConfig: AuthConfig,
        private readonly authService: AuthService,
        private readonly router: Router,
        public readonly store: Store
    ) { }

    /**
     * Intercepta y manipula peticiones HTTP.
     * @param req Petición HTTP.
     * @param next Próximo manejador de la petición HTTP.
     * @returns Observable con la llamada al próximo manejador de la petición HTTP manipulada.
     */
    public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const isFileRequest: boolean = /(\.html?|\.js|\.svg|\.json|\/connect\/userinfo)/i.test(req.url);
        const hasAuthorizationHeader: boolean = typeof req.headers === 'object' && req.headers.has('Authorization');

        const unAuthUrls: string[] = ['/auth'];
        const isAuthRequest: boolean =
            typeof req.url === 'string' && unAuthUrls.some((item: string) => req.url.indexOf(item) > -1);

        if (!isFileRequest && !hasAuthorizationHeader && !isAuthRequest) {
            return this.authService.isAuthenticated$().pipe(
                switchMap((isAuthenticated: boolean) => {
                    if (isAuthenticated) {
                        return this.store.selectOnce(AuthState.token);
                    } else {
                        return of('');
                    }
                }),
                switchMap((token: string) => {
                    // Envía el storage token.
                    const tokenToRequest: string = token || null;
                    if (tokenToRequest) {
                        req = req.clone({
                            setHeaders: {
                                authorization: `Bearer ${tokenToRequest}`,
                            },
                        });

                        return next.handle(req);
                    } else {
                        this.router.navigateByUrl(this.authConfig.routeLogin);

                        // eslint-disable-next-line @typescript-eslint/no-throw-literal
                        throw new HttpErrorResponse({
                            error: {
                                errorCode: ApiErrorCodes.ErrAuthAccessTokenExpired,
                            },
                            headers: req.headers,
                            status: 401,
                            statusText: 'Unauthorized',
                            url: req.url,
                        });
                    }
                })
            );
        } else {
            return next.handle(req);
        }
    }
}
