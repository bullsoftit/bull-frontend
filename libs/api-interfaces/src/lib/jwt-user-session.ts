import { UserRole } from './user-role';

/**
 * Información de la sesión de un usuario.
 */
export interface JwtUserSession {

    /** identificador del usuario. */
    sub: string;

    /** External token. */
    external_token: string;

    /** Rol del Usuario. */
    role: UserRole[];

    /** Avatar del Usuario. */
    avatar: string;

    /** Tipo de token. */
    // eslint-disable-next-line @typescript-eslint/naming-convention -- Nombre de JWT.
    token_usage: string;

    /** JWT ID. */
    jti: string;

    /** Audience. */
    aud: string;

    /** Authorized party. */
    azp: string;

    /** Role del usuario. */
    exp: number;
}
