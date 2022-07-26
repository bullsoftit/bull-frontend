import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginFormModule, MessengerModule } from '@bullsoft-frontend/components';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        SharedModule,
        LoginRoutingModule,
        LoginFormModule,
        MessengerModule
    ],
})
export class LoginModule { }
