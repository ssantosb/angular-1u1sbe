import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Request } from './request';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RequestDetail } from './request-detail';

const API_URL = environment.apiURL;
const requests = '/requests';


@Injectable()
export class RequestService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
   constructor(private http: HttpClient) { }

   /**
    * Method to get all requests in the app.
    */
   getRequests() : Observable<Request[]> {
       return this.http.get<Request[]>(API_URL + requests);
   }

   /**
    * Gets a specific request according to its ID
    * @param idRequest id of the request to be retrieved
    */
   getRequest(idRequest) : Observable<Request> {
       return this.http.get<Request>(API_URL + requests + '/' + idRequest);
   }

   /**
    * Creates a new request
    * @param request Request object to be created
    */
   createRequest(request:Request): Observable<Request>{
       return this.http.post<Request>(API_URL+requests, request);
   }

   /**
    * Updates a request with new information.
    * @param request Request to be updated
    */
   updateRequest(request): Observable<RequestDetail>{
       return this.http.put<RequestDetail>(API_URL+requests+'/'+request.id, request);
   }
   /**
    * 
    * @param request 
    */
   //createUnit(request: Request): Observable<Request> {
     //  return this.http.post<Request>(API_URL+requests, request);
    //}
    
}