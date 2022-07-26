import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from '@bullsoft-frontend/core';

const sharedModules: any[] = [
    TranslateModule,
    AngularMaterialModule,
    CommonModule
]

/**
 * Módulo compartido de la aplicación.
 */
@NgModule({
    declarations: [],
    imports: [...sharedModules],
    exports: [...sharedModules]
})
export class SharedModule { }
