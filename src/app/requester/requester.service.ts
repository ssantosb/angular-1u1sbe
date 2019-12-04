import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Requester } from './requester';
import { RequesterDetail } from './requester-detail';

import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

const API_URL = environment.apiURL;
const requesters = '/requesters';


/**
* The service provider for everything related to requesters
*/
@Injectable()
export class RequesterService {

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient, private authService: AuthService) { }

    /**
    * Returns the Observable object containing the list of requesters retrieved from the API
    * @returns The list of requesters in real time
    */
    getRequesters(): Observable<Requester[]> {
        return this.http.get<Requester[]>(API_URL + requesters);
    }

    /**
    * Creates a new requester
    * @param requester The new requester
    * @returns The requester with its new id if it was created, false if it wasn't
    */
    createRequester(requester): Observable<RequesterDetail> {
        return this.http.post<RequesterDetail>(API_URL + requesters, requester);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getRequesterDetail(requesterId): Observable<RequesterDetail> {
        return this.http.get<RequesterDetail>(API_URL + requesters + '/' + requesterId);
    }


    /**
  * Sign the user up with the selected role
  */
    signUp(login, unit): void {
        this.authService.login('Requester', login, unit);
    }
}

