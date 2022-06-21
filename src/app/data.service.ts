import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
 
@Injectable()
export class DataService {
 
    private url = "https://localhost:7057/api/Building";
 
    constructor(private http: HttpClient) {
    }
 
    getRandomBuildings(count: number) {
        return this.http.get(this.url + '/getRandomBuildings/' + count);
    }
}