import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { AuthApiService } from './auth-api.service';
import { AuthService } from './auth.service';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthState } from './store/auth.state';
import { AuthConfig } from './config/auth-config';

/**
 * Módulo para auth..
 */
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        NgxsModule.forFeature([AuthState])
    ],
    providers: [
        AuthGuard,
        AuthApiService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ]
})
export class AuthModule {
    /**
     * Método de inicialización del módulo.
     * @param authConfig Configuración de auth.
     * @returns Inicialización del módulo.
     */
    public static forRoot(authConfig: AuthConfig): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [
                {
                    provide: 'authConfig',
                    useValue: authConfig
                }
            ]
        };
    }
}
