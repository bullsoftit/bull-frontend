import { UserProfile, UserSession } from '@bullsoft-frontend/api-interfaces';
import { StateToken } from '@ngxs/store';

/**
 * Modelo que representa el estado del módulo auth.
 */
export interface AuthStateModel {

    /** Nombre de usuario. */
    username: string;

    /** Password. */
    password: string;

    /** Token de sesión. */
    token: string;

    /** Información del usuario autenticado. */
    userSession: UserSession;

    /** Información del pasajero autenticado. */
    userProfile: UserProfile;
}

/** Nombre del estado. */
export const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('auth');
