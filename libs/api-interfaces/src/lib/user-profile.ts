import { JwtUserSession } from './jwt-user-session';

/**
 * Información de la sesión de un usuario.
 */
export interface UserProfile {

    /** Nombre. */
    firstname: string;

    /** Compañia del Usuario. */
    lastname: string;

    /** Compañia del Usuario. */
    email: string;

    /** Fecha de nacimiento. */
    dateOfBirth: Date;
}
