import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthProfileRoutingModule } from './auth-profile-routing.module';
import { AuthProfileComponent } from './auth-profile.component';

@NgModule({
    declarations: [AuthProfileComponent],
    imports: [CommonModule, AuthProfileRoutingModule],
})
export class AuthProfileModule {}
