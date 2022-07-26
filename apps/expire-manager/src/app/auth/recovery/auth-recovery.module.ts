import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRecoveryRoutingModule } from './auth-recovery-routing.module';
import { AuthRecoveryComponent } from './auth-recovery.component';

@NgModule({
    declarations: [AuthRecoveryComponent],
    imports: [CommonModule, AuthRecoveryRoutingModule],
})
export class AuthRecoveryModule {}
