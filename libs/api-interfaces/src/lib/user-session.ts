import { JwtUserSession } from './jwt-user-session';

/**
 * Información de la sesión de un usuario.
 */
export interface UserSession extends JwtUserSession {

    /** Email del cliente. */
    nameid: string;

    /** Compañia del Usuario. */
    company_name: string;

    /** Nombre del usuario. */
    pax_fullname: string;

    /** Id del usuario. */
    pax_id: string;

    /** Código de idioma. */
    pax_languageCode: string;

    /** Email del usuario. */
    pax_email: string;
}
