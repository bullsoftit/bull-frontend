import { Injectable, NgZone } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Messenger } from './entities/messenger';
import { MessengerType } from './entities/messenger-type';
import { MessengerComponent } from './messenger.component';

/**
 * Administra las operaciones del módulo messenger.
 */
@Injectable()
export class MessengerService {
    /**
     * Creates an instance of error message modal service.
     * @param translateService Administra operaciones de i18n.
     * @param dialogService Servicio de dialog.
     * @param snackBarService Servicio de snack bar.
     * @param ngZone Administra operaciones de detección de cambios en la app (Angular).
     */
    constructor(
        private translateService: TranslateService,
        private dialogService: MatDialog,
        private snackBarService: MatSnackBar,
        private ngZone: NgZone
    ) { }

    /**
     * Muestra un mensaje en un modal.
     * @param config Contenido del mensaje.
     * @param panelClass Clase para personalizar el panel contenedor.
     * @returns Referencia del modal.
     */
    public show(config: Messenger, panelClass?: string | string[]): MatDialogRef<MessengerComponent> {
        const messageModal: MatDialogRef<MessengerComponent> = this.dialogService.open(MessengerComponent, {
            data: config,
            panelClass:
                typeof panelClass === 'object'
                    ? [...panelClass, 'at-dialog-alert']
                    : panelClass
                        ? [panelClass, 'at-dialog-alert']
                        : 'at-dialog-alert',
        });
        return this.ngZone.run(() => messageModal);
    }

    /**
     * Muestra mensaje de error.
     * @param errorMessage Mensaje a mostrar al usuario.
     * @returns Confirmación de recepción del error.
     */
    public showError(message: string, title?: string): MatDialogRef<MessengerComponent, void> {
        const messageModal: Messenger = {
            title,
            message,
            modalType: MessengerType.Error,
            actions: [
                {
                    text: this.translateService.instant('CLOSE'),
                    actionClass: 'bg-primary text-primary-contrast',
                },
            ],
        };
        return this.show(messageModal);
    }

    /**
     * Muestra mensaje de error.
     * @param errorMessage Mensaje a mostrar al usuario.
     * @returns Confirmación de recepción del error.
     */
    public showSuccessAlert(title: string, message: string = null): MatDialogRef<MessengerComponent, void> {
        const messageModal: Messenger = {
            title,
            message,
            modalType: MessengerType.Success,
            actions: [
                {
                    text: this.translateService.instant('ACCEPT'),
                    actionClass: 'bg-primary text-primary-contrast',
                },
            ],
        };
        return this.show(messageModal);
    }

    /**
     * Devuelve true si el mensaje fue descartado. False de lo contrario.
     * @param message Mensaje.
     * @param textBtn Textp del botón [descartar].
     * @returns True si el mensaje fue descartado. False de lo contrario.
     */
    public showDismissable(message?: string, textBtn?: string): Observable<boolean> {
        const messageToSend: string = message || this.translateService.instant('MESSENGER.DISMISSABLE.MESSAGE');
        const textBtnToSend: string = textBtn || this.translateService.instant('MESSENGER.DISMISSABLE.BTN');
        return this.snackBarService
            .open(messageToSend, textBtnToSend, { duration: 3000 })
            .afterDismissed()
            .pipe(switchMap((response: MatSnackBarDismiss) => of(response?.dismissedByAction)));
    }

    /**
     * Devuelve true si el mensaje fue descartado. False de lo contrario.
     * @param message Mensaje.
     * @param textBtn Textp del botón [descartar].
     * @returns True si el mensaje fue descartado. False de lo contrario.
     */
    public showSuccessfully(message?: string): Observable<MatSnackBarDismiss> {
        return this.snackBarService
            .open(message, null, { duration: 3000, panelClass: 'bg-green-500' })
            .afterDismissed();
    }
}
