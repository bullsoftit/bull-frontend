import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiErrorCodes, Credentials } from '@bullsoft-frontend/api-interfaces';
import { MessengerService } from '@bullsoft-frontend/components';
import { authActions, HttpApiError } from '@bullsoft-frontend/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { catchError, EMPTY, Observable, Subject, takeUntil, throwError } from 'rxjs';
import * as routesConfig from '../../config/routes.config';
import * as authRoutesConfig from '../config/routes.config';

@Component({
    selector: 'bullsoft-frontend-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {

    /** True si se está ejecutando el login. False de lo contrario. */
    public loading$: Observable<boolean>

    /** Versión de la app. */
    public appVersion$: Observable<string>

    /** Referencia para desuscribir observables del componente. */
    private destroy$: Subject<boolean> = new Subject<boolean>();

    /**
     * Creates an instance of login component.
     */
    constructor(
        private translateService: TranslateService,
        private messengerService: MessengerService,
        private router: Router,
        private store: Store
    ) { }

    ngOnInit(): void { }

    /**
     * Evento de destrucción del componente.
     */
    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    /**
     * Redirije a la vista de resetear la contraseña.
     */
    public goToRecovery(): void {
        this.router.navigateByUrl(`/${routesConfig.AUTH}/${authRoutesConfig.RECOVERY}`);
    }

    public login(credentials: Credentials): void {
        const { username, password } = credentials;


        this.store.dispatch(new authActions.Login(username, password))
            .pipe(
                catchError((err) => {
                    return this.handleLoginError(err);
                }),
                takeUntil(this.destroy$)
            )
            .subscribe(() => {
                // Redirije al root de la app para que levante la ruta configurada por defecto.
                this.router.navigateByUrl('');
            });
    }

    /**
     * Maneja errores de login.
     * @param apiError Error durante el login.
     * @returns Observable.
     */
    private handleLoginError(apiError: HttpApiError): Observable<never> {
        let ret: Observable<never> = EMPTY;
        switch (apiError?.error?.errorCode) {
            case ApiErrorCodes.ErrAuthInvalidCredentials:
                this.messengerService.showError(this.translateService.instant('AUTH.LOGIN.ERROR.CREDENTIALS'));
                break;

            default:
                ret = throwError(() => ({ ...apiError, handle: true }));
        }
        return ret;
    }
}
