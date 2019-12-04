import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provider } from './provider';
import { ProviderDetail } from './provider-detail';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const providers = '/providers';



@Injectable()
export class ProviderService {
  httpOptions = {
     headers: new HttpHeaders({ "Content-Type": "application/json" })
   };
    constructor(private http: HttpClient) { }

    getProviders() : Observable<Provider[]> {
        return this.http.get<Provider[]>(API_URL + providers);
    }

    getProvider(idProvider) : Observable<ProviderDetail> {
        return this.http.get<ProviderDetail>(API_URL + providers + '/' + idProvider);
    }

    createProvider(provider: Provider): Observable<Provider> {
        return this.http.post<Provider>(API_URL+providers, provider);
}
  deleteProvider(idProvider): Observable<ProviderDetail> {
      return this.http.delete<ProviderDetail>(API_URL + providers + '/' + idProvider);
}
updateProvider(provider): Observable<ProviderDetail> {
    return this.http.put<ProviderDetail>(API_URL + providers + '/' + provider.id, provider);
}

}
