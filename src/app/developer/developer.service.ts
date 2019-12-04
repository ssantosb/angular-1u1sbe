import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Developer } from './developer';
import { DeveloperDetail } from './developer-detail';

import { environment } from '../../environments/environment';

import { AuthService } from '../auth/auth.service';

const API_URL = environment.apiURL;
const developers = '/developers';


/**
* The service provider for everything related to developers
*/
@Injectable()
export class DeveloperService {

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient, private authService: AuthService) { }

    /**
    * Returns the Observable object containing the list of developers retrieved from the API
    * @returns The list of developers in real time
    */
    getDevelopers(): Observable<Developer[]> {
        return this.http.get<Developer[]>(API_URL + developers);
    }

    /**
    * Creates a new developer
    * @param developer The new developer
    * @returns The developer with its new id if it was created, false if it wasn't
    */
    createDeveloper(developer): Observable<Developer> {
        return this.http.post<Developer>(API_URL + developers, developer);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getDeveloperDetail(developerId): Observable<DeveloperDetail> {
        return this.http.get<DeveloperDetail>(API_URL + developers + '/' + developerId);
    }

    /**
     * @param developer Developer object to be updated
     * Updates a developer by parameter
     */
    updateDeveloper(developer): Observable<DeveloperDetail> {
        return this.http.put<DeveloperDetail>(API_URL + developers + '/' + developer.id, developer);
    }

    /**
     * Deletes a developer by its id given as parameter.
     * @param developerId id of the developer to be deleted
     */
    deleteDeveloper(developerId): Observable<DeveloperDetail> {
        return this.http.delete<DeveloperDetail>(API_URL + developers + '/' + developerId);
    }


    /**
  * Sign the user up with the selected role
  */
    signUp(login): void {
        this.authService.login('Developer', login, 'null');
    }
}

