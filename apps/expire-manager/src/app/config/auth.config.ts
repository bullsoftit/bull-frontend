import { AuthConfig } from '@bullsoft-frontend/core';
import * as routesConfig from '../config/routes.config';
import * as authRoutesConfig from '../auth/config/routes.config';

export const authConfig: AuthConfig = {
    routeLogin: `${routesConfig.AUTH}/${authRoutesConfig.LOGIN}`,
    unauthUrls: ['/login', 'reset-user']
}
