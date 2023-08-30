import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { TokenService, LogService, UtilsService } from 'abp-ng2-module';
import { AppConsts } from '@shared/AppConsts';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import {
    AuthenticateModel,
    AuthenticateResultModel,
    TokenAuthServiceProxy,
} from '@shared/service-proxies/service-proxies';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AppAuthService {
    authenticateModel: AuthenticateModel;
    authenticateResult: AuthenticateResultModel;
    rememberMe: boolean;


    private authenticatedUserName: BehaviorSubject<string> = new BehaviorSubject<string>('');

    setAuthenticatedUserName(username: string): void {
        this.authenticatedUserName.next(username);
    }

    getAuthenticatedUserName(): Observable<string> {
        return this.authenticatedUserName.asObservable();
    }
    // authenticatedUserName: string = '';

    // setAuthenticatedUserName(username: string): void {
    //     this.authenticatedUserName = username;
    // }
    // authenticatedUserName: string = '';

    // setAuthenticatedUserName(username: string): void {
    //     this.authenticatedUserName = username;
    // }

    // getAuthenticatedUserName(): string {
    //     return this.authenticatedUserName;
    // }

    // getFullName(): string {
    //     return 'fullNameValue';
    // }


    constructor(
        private _tokenAuthService: TokenAuthServiceProxy,
        private _router: Router,
        private _utilsService: UtilsService,
        private _tokenService: TokenService,
        private _logService: LogService
    ) {
        this.clear();
    }

    logout(reload?: boolean): void {
        abp.auth.clearToken();
        abp.utils.deleteCookie(AppConsts.authorization.encryptedAuthTokenName);

        if (reload !== false) {
            location.href = AppConsts.appBaseUrl;
        }
    }

    authenticate(finallyCallback?: () => void): void {
        finallyCallback = finallyCallback || (() => { });

        this._tokenAuthService
            .authenticate(this.authenticateModel)
            .pipe(
                finalize(() => {
                    finallyCallback();
                })
            )
            .subscribe((result: AuthenticateResultModel) => {
                this.processAuthenticateResult(result);
            });
    }

    private processAuthenticateResult(
        authenticateResult: AuthenticateResultModel
    ) {
        this.authenticateResult = authenticateResult;
        debugger;
        if (authenticateResult.accessToken) {
            // Successfully logged in
            this.login(
                authenticateResult.accessToken,
                authenticateResult.encryptedAccessToken,
                authenticateResult.expireInSeconds,
                this.rememberMe
            );
        } else {
            // Unexpected result!
            // debugger
            this._logService.warn('Unexpected authenticateResult!');
            this._router.navigate(['landingpage']);
            // this._router.navigate(['homepage']);
            this._router.navigate(['/landingpage/login']);

        }
    }

    private login(
        accessToken: string,
        encryptedAccessToken: string,
        expireInSeconds: number,
        rememberMe?: boolean
    ): void {
        const tokenExpireDate = rememberMe
            ? new Date(new Date().getTime() + 1000 * expireInSeconds)
            : undefined;

        this._tokenService.setToken(accessToken, tokenExpireDate);

        this._utilsService.setCookieValue(
            AppConsts.authorization.encryptedAuthTokenName,
            encryptedAccessToken,
            tokenExpireDate,
            abp.appPath
        );

        let initialUrl = UrlHelper.initialUrl;
        if (initialUrl.indexOf('/login') > 0) {
            initialUrl = AppConsts.appBaseUrl;
        }
        // debugger;
        location.href = AppConsts.appBaseUrl + "/app/about";//ERROR
    }

    private clear(): void {
        this.authenticateModel = new AuthenticateModel();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = null;
        this.rememberMe = false;
    }
}
