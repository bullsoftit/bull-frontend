export interface AuthConfig {

    /** Ruta del login. */
    routeLogin: string;

    /** Rutas que no requieren autenticación. */
    unauthUrls: string[];
}
