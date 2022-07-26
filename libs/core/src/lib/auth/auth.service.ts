import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthState } from './store/auth.state';

/**
 * Administra operaciones del módulo auth de dashboard api.
 */
@Injectable()
export class AuthService {
    /** Administra operaciones del módulo jwt. */
    private jwtHelperService: JwtHelperService;

    /**
     * Creates an instance of auth service.
     * @param store Estado general de la app.
     */
    constructor(private readonly store: Store) {
        this.jwtHelperService = new JwtHelperService();
    }

    /**
     * Devuelve true si el usuario tiene autenticación válida. False de lo contrario.
     * @returns True si el usuario tiene autenticación válida. False de lo contrario.
     */
    public isAuthenticated$(): Observable<boolean> {
        return this.store.selectOnce(AuthState.token).pipe(
            map((storageToken: string) => {
                const hasSessionStorage: boolean = storageToken && !this.isExpiredToken(storageToken);
                return hasSessionStorage;
            }),
            // Si lanza error, rechaza la autorización.
            catchError(() => of(false))
        );
    }

    /**
     * Devuelve true si el token está expirado y no está expirado. False de lo contrario.
     * @param token Access token.
     * @returns True si el token está expirado y no está expirado. False de lo contrario.
     */
    public getUserSession<T>(token: string): T {
        const userSession: T = this.jwtHelperService.decodeToken<T>(token);
        return userSession;
    }

    /**
     * Devuelve true si el token está expirado y no está expirado. False de lo contrario.
     * @param token Access token.
     * @returns True si el token está expirado y no está expirado. False de lo contrario.
     */
    private isExpiredToken(token: string): boolean {
        /** Valida si el token está expirado con un offset de 30 minutos. */
        const isExpired: boolean = this.jwtHelperService.isTokenExpired(token, 60 * 30);
        return isExpired;
    }
}
