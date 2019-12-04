import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hardware } from './hardware';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s2_sitiosweb-api/api/hardwares';
const editorials = '/hardwares';

@Injectable()
export class HardwareService {
    
    constructor(public http: HttpClient) { }    
  
    getHardwares() : Observable<Hardware[]> {
        return this.http.get<Hardware[]>(API_URL);
    }

  getHardwareDetail(hardwareid): Observable<Hardware> {
        return this.http.get<Hardware>('http://localhost:8080/s2_sitiosweb-api/api/projects/3/hardwares/' + hardwareid);
  }


    createHardware(hardware): Observable<Hardware> {
        return this.http.post<Hardware>('http://localhost:8080/s2_sitiosweb-api/api/projects/3/hardwares', hardware);
    }
    
    updateHardware(hardware): Observable<Hardware> {
        return this.http.put<Hardware>(API_URL + editorials + '/' + hardware.id, hardware);
    }
    
    deleteEditorial(hardwareid): Observable<Hardware> {
        return this.http.delete<Hardware>(API_URL + editorials + '/' + hardwareid);
    }

    
}
