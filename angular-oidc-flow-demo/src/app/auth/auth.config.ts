import { PassedInitialConfig } from "angular-auth-oidc-client";
// import { AuthConfig } from "angular-oauth2-oidc";


export const authConfig: PassedInitialConfig = {
    config: {
    authority: 'http://localhost:8080',
    redirectUrl: 'http://localhost:4200/callback',
    clientId: 'angular-client',
    responseType: 'code',
    scope: 'openid read',
    silentRenew: false,
    useRefreshToken: true
    }
};