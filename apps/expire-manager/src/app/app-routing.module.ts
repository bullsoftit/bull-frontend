import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@bullsoft-frontend/core';
import * as routesConfig from './config/routes.config';

const routes: Routes = [
    {
        path: routesConfig.AUTH,
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: routesConfig.DASHBOARD,
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: routesConfig.BATCHES,
        loadChildren: () => import('./batches/batches.module').then((m) => m.BatchesModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: routesConfig.PRODUCTS,
        loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: routesConfig.USERS,
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: '**',
        redirectTo: routesConfig.DASHBOARD,
    },
];

/**
 * Configuración de rutas para el módulo app.
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
