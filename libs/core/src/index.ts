/** Angular Material. */
export { AngularMaterialModule } from '../../components/src/lib/angular-material/angular-material.module';

/** Auth */
export { AuthConfig } from './lib/auth/config/auth-config';
export { AuthApiService } from './lib/auth/auth-api.service';
export { AuthGuard } from './lib/auth/auth.guard';
export { AuthInterceptor } from './lib/auth/auth.interceptor';
export { AuthModule } from './lib/auth/auth.module';
export { AuthService } from './lib/auth/auth.service';
export { AuthState } from './lib/auth/store/auth.state';
export { AUTH_STATE_TOKEN, AuthStateModel } from './lib/auth/store/auth.state-model';
export * as authActions from './lib/auth/store/auth.actions';

/** Core. */
export { CoreModule } from './lib/core.module';
export { CoreService } from './lib/core.service';

/** Global error handler. */
export { GlobalErrorHandlerModule } from './lib/global-error-handler/global-error-handler.module';
export { GlobalErrorHandlerService } from './lib/global-error-handler/global-error-handler.service';
export { ErrorMessage } from './lib/entities/error-message';
export { GlobalErrorHandlerConfig } from './lib/entities/global-error-handler-config';
export { HttpApiError } from './lib/entities/http-api-error';
export { StatusMessage } from './lib/entities/status-message';


/** Entidades */
export { IconType } from './lib/entities/icon-type';
