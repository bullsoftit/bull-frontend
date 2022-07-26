import { MessengerAction } from './messenger-action';
import { MessengerType } from './messenger-type';

/**
 * Mensaje para mostrar en un modal.
 */
export interface Messenger {
    /** Tipo de mensaje */
    modalType?: MessengerType;

    /** Título del mensaje a mostrar. */
    title?: string;

    /** Contenido del mensaje a mostrar. */
    message?: string;

    /** Acciones del mensaje. */
    actions?: MessengerAction[];

    /** Clases de estilos para el modal. */
    modalClass?: string;

    /** True si muestra una barra de progreso. False de lo contrario. */
    showLinnearProgress?: boolean;
}
