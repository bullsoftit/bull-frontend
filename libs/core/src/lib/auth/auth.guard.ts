import { Inject, Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AuthConfig } from './config/auth-config';

/**
 * Controla el acceso a páginas que requieren autenticación.
 */
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        @Inject('authConfig')
        private authConfig: AuthConfig,
        private authService: AuthService,
        private router: Router
    ) { }

    /**
     * Devuelve true si el usuario está autorizado. Se lo redirije de lo contrario.
     * @returns True si está autorizado. False de lo contrario.
     */
    public canActivate(): Observable<boolean | UrlTree> {
        const ret: Observable<boolean | UrlTree> = this.authService
            .isAuthenticated$()
            .pipe(
                map(
                    (isAuthorized: boolean) =>
                        isAuthorized || this.router.createUrlTree([this.authConfig.routeLogin])
                )
            );
        return ret;
    }

    /**
     * Determina si un módulo puede ser cargado.
     * @returns Load.
     */
    public canLoad(): Observable<boolean | UrlTree> {
        const ret: Observable<boolean | UrlTree> = this.authService
            .isAuthenticated$()
            .pipe(
                map(
                    (isAuthorized: boolean) =>
                        isAuthorized || this.router.createUrlTree([this.authConfig.routeLogin])
                )
            );
        return ret;
    }
}
