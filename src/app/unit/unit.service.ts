import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit';
import { UnitDetail } from './unit-detail';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const units = '/units';



@Injectable()
export class UnitService {
  httpOptions = {
     headers: new HttpHeaders({ "Content-Type": "application/json" })
   };
    constructor(private http: HttpClient) { }

    getUnits() : Observable<Unit[]> {
        return this.http.get<Unit[]>(API_URL + units);
    }

    getUnit(idUnit) : Observable<UnitDetail> {
        return this.http.get<UnitDetail>(API_URL + units + '/' + idUnit);
    }

    createUnit(unit: Unit): Observable<Unit> {
        return this.http.post<Unit>(API_URL+units, unit);
}
  deleteUnit(idUnit): Observable<UnitDetail> {
      return this.http.delete<UnitDetail>(API_URL + units + '/' + idUnit);
}
updateUnit(unit): Observable<UnitDetail> {
    return this.http.put<UnitDetail>(API_URL + units + '/' + unit.id, unit);
}

}
