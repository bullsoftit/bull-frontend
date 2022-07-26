import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule, MAT_DRAWER_DEFAULT_AUTOSIZE } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MAT_DATE_LOCALE, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { PaginatorI18n } from './paginator-i18n.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { matDialogConfig } from './dialog.config';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const angularMaterialModules: any = [
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBadgeModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
];

/**
 * Módulo para angular material.
 */
@NgModule({
    imports: [],
    exports: [...angularMaterialModules],
    providers: [
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'es-AR',
        },
        {
            provide: MatPaginatorIntl,
            useClass: PaginatorI18n,
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'ARS',
        },
        {
            provide: LOCALE_ID,
            useValue: 'es-AR',
        },
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill',
            },
        },
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: matDialogConfig,
        },
        {
            provide: MAT_DRAWER_DEFAULT_AUTOSIZE,
            useValue: true,
        },
    ],
})
export class AngularMaterialModule { }
