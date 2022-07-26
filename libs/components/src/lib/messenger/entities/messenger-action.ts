/**
 * Acciones de messenger.
 */
export interface MessengerAction {
    /** Texto. */
    text: string;

    /** Valor devuelto */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: boolean;

    /** Nombre de clase para la acción */
    actionClass?: string;

    /** Nombre de la paleta. */
    pallete?: 'primary' | 'accent' | 'warn';
}
