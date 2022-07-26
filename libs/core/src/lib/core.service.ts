import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { IconType } from './entities/icon-type';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Herramientas generales para las apps.
 */
@Injectable()
export class CoreService {
    /**
     * Creates an instance of core service.
     * @param translateService Administra operaciones de i18n.
     * @param iconRegistry Servicio para registrar íconos custom en la app.
     * @param sanitizer Servicio que ayuda a interpretar valores de forma segura.
     */
    constructor(
        private translateService: TranslateService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {}

    /**
     * Inicializa la configuración de la aplicación.
     */
    public initConfigApp(): void {
        /** Define el idioma de la app. */
        registerLocaleData(localeEsAR, 'es-AR');
        this.translateService.setDefaultLang('es');
    }

    /**
     * Devuelve un identificador único por cada item para facilitar la detección de cambios de angular.
     * @param idx Número de posición del item.
     * @param _item Item.
     * @returns Identificador único por item para facilitar la detección de cambios de angular.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public trackByField(fieldByTrack: string): (idx: number, _item: any) => string {
        /* eslint-disable-next-line */
        return (idx: number, item: any) => `${fieldByTrack}`;
    }

    /**
     * Devuelve un identificador único por cada item para facilitar la detección de cambios de angular.
     * @param idx Número de posición del item.
     * @param item Item.
     * @returns Identificador único por item para facilitar la detección de cambios de angular.
     */
    /* eslint-disable-next-line */
    public trackByIdx(idx: number, item: any): string {
        const ret = `${idx}`;
        return ret;
    }

    /**
     * Devuelve una lista numérica para armar opcioenes en combos de valores numéricos.
     * @param numerIterations Cantidad de opciones.
     * @returns Lista numérica para armar opcioenes en combos de valores numéricos.
     */
    public getNumericList(numerIterations: number): number[] {
        return new Array(numerIterations).fill(null).map((item, idx) => idx);
    }

    /**
     * Registra íconos para ser usados en la app.
     * @param type Tipo de ícono.
     * @param name Nombre del ícono.
     */
    public registerIcon(type: IconType, name: string): void {
        this.iconRegistry.addSvgIcon(
            name,
            this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${type}/${name}.${type}`)
        );
    }
}
