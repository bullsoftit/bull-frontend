import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@bullsoft-frontend/core';
import * as routesConfig from './config/routes.config';

const routes: Routes = [
    {
        path: routesConfig.CHANGE_PASSWORD,
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule),
        canActivate: [AuthGuard]
    },
    {
        path: routesConfig.LOGIN,
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: routesConfig.PROFILE,
        loadChildren: () => import('./profile/auth-profile.module').then(m => m.AuthProfileModule),
        canActivate: [AuthGuard]
    },
    {
        path: routesConfig.RECOVERY,
        loadChildren: () => import('./recovery/auth-recovery.module').then(m => m.AuthRecoveryModule)
    },
    {
        path: routesConfig.REGISTER,
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: `${routesConfig.LOGIN}`
    }];;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
