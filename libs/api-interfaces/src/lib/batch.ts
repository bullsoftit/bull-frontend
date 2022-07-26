import { BatchStatus } from './batch-status';
import { Product } from './product';

/**
 * Información de un lote de mercadería.
 */
export interface Batch {

    /** Producto del lote. */
    product: Product;

    /** Cantidad de unidades. */
    quantity: number;

    /** Fecha de vencimiento. */
    expirationDate: Date;

    /** Fecha de notificación. */
    notificationDate: Date;

    /** Fecha de reclamo. */
    claimDate: Date;

    /** Fecha de aprobación. */
    approveDate: Date;

    status: BatchStatus;

}
