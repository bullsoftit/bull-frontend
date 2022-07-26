import { ChangePasswordRequest } from '@bullsoft-frontend/api-interfaces';

const CONTEXT: string = '[AUTH]';

/**
 * Realiza el proceso de autenticación del usuario.
 */
export class Login {

    /** Identificador de la acción. */
    public static readonly type = `${CONTEXT} Login`;

    /**
     * Creates an instance of login.
     * @param username Nombre de usuario.
     * @param password Contraseña.
     */
    constructor(public username: string, public password: string) { }
}

/**
 * Finaliza la sesión del usuario.
 */
export class Logout {

    /** Identificador de la acción. */
    public static readonly type = `${CONTEXT} Logout`;
}

/**
 * Realiza el cambio de la contraseña.
 */
export class ChangePassword {

    /** Identificador de la acción. */
    public static readonly type = `${CONTEXT} Change password`;

    /**
     * Creates an instance of change password.
     * @param changePasswordRequest Change password request.
     */
    constructor(public changePasswordRequest: ChangePasswordRequest) { }
}

/**
 * Realiza el pedido de reseteo de contraseña.
 */
export class RequestPassowrdReset {

    /** Identificador de la acción. */
    public static readonly type = `${CONTEXT} Request password reset`;

    /**
     * Creates an instance of request passowrd reset.
     * @param username Nombre de usuario.
     */
    constructor(public username: string) { }
}

/**
 * Obtiene el pasajero autenticado.
 */
export class GetUserProfile {

    /** Identificador de la acción. */
    public static readonly type = `${CONTEXT} Get auth pax`;
}

