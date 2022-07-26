import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { adminToken } from './mock/token.mock';

/**
 * Auth api service.
 */
@Injectable()
export class AuthApiService {

    /** Base url */
    private baseUrl: string = 'https://auth.bullsoft.com';

    constructor(
        private readonly httpClient: HttpClient) { }

    /**
     * Authentication.
     */
    public login$(username: string, password: string): Observable<string> {
        // const url = `${this.baseUrl}/login`;
        // return this.httpClient.post<string>(url, { username, password });
        return of(adminToken).pipe(delay(500));
    }
}
