import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store, createSelector } from '@ngxs/store';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthStateModel, AUTH_STATE_TOKEN } from './auth.state-model';
import { UserProfile, UserSession } from '@bullsoft-frontend/api-interfaces';
import { AuthService } from '../auth.service';
import { AuthApiService } from '../auth-api.service';
import * as actions from './auth.actions';

/**
 * Implementa las acciones del módulo auth.
 */
@State<AuthStateModel>({
    name: AUTH_STATE_TOKEN,
    defaults: {
        userProfile: null,
        userSession: null,
        token: null,
        username: null,
        password: null
    }
})
@Injectable()
export class AuthState {

    /**
     * Creates an instance of auth state.
     * @param authApiService Administra operaciones del módulo auth del api.
     * @param authService Administra operaciones de autenticación.
     */
    constructor(
        private authApiService: AuthApiService,
        // private authService: AuthService
    ) { }

    /**
     * Selector del store que retorna el token de autenticación.
     * @param state Modelo que representa el estado del módulo auth.
     * @returns Token de autenticación.
     */
    @Selector()
    public static token(state: AuthStateModel): string {
        return state.token;
    }

    /**
     * Nombre de usuario.
     * @param state Modelo que representa el estado del módulo auth.
     * @returns Nombre de usuario.
     */
    @Selector()
    public static username(state: AuthStateModel): string {
        return state.username;
    }

    /**
    * Selector del password.
    * @param state Modelo que representa el estado del módulo auth.
    * @returns Password.
    */
    @Selector()
    public static password(state: AuthStateModel): string {
        return state.password;
    }

    /**
     * Información del usuario autenticado.
     * @param state Modelo que representa el estado del módulo auth.
     * @returns Información del usuario autenticado.
     */
    @Selector()
    public static userSession(state: AuthStateModel): UserSession {
        return state.userSession;
    }

    /**
     * Información del pasajero autenticado.
     * @param state Modelo que representa el estado del módulo auth.
     * @returns Información del pasajero autenticado.
     */
    @Selector()
    public static userProfile(state: AuthStateModel): UserProfile {
        return state.userProfile;
    }

    /**
     * Realiza el proceso de autenticación del usuario.
     * @param ctx Estado de la app.
     * @param action Acción que cambia el estado de la app.
     * @returns Observable.
     */
    @Action(actions.Login)
    public login(
        ctx: StateContext<AuthStateModel>,
        action: actions.Login
    ): Observable<string> {
        return this.authApiService.login$(action.username, action.password)
            .pipe(
                tap((token: string) => {
                    // const userSession: UserSession = this.authService.getUserSession<UserSession>(token);
                    ctx.patchState({
                        token,
                        username: action.username,
                        password: action.password
                    });
                })
            );
    }

    /**
     * Finaliza la sesión del usuario.
     * @param ctx Estado de la app.
     * @returns Observable.
     */
    @Action(actions.Logout)
    public logout(ctx: StateContext<AuthStateModel>): void {

        ctx.patchState({
            username: null,
            password: null,
            token: null,
            userProfile: null,
            userSession: null,
        })
    }
}
