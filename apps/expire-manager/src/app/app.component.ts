import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import localeEsAR from '@angular/common/locales/es-AR';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'bullsoft-frontend-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    constructor(
        private translateService: TranslateService,
    ) { }

    /**
     * Evento de inicialización del componente.
     */
    public ngOnInit(): void {
        /** Define el idioma de la app. */
        registerLocaleData(localeEsAR, 'es-AR');
        this.translateService.setDefaultLang('es');
    }
}
