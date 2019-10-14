import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClientDataService {

    adminURL = "http://localhost:8000/";
    constructor(private http: HttpClient) { }

    getClientDetails() {
        const httpOptions = { headers: this.getTokenHeader() };
        return this.http.get(this.adminURL + 'getClientDetails', httpOptions);
    }
    saveClientDetails(value: any) {
        const httpOptions = { headers: this.getTokenHeader() };
/*         value = {
            "clientName":"Sanjeev123",
            "countryCode":91,
            "phoneNumber":"8344051654",
            "emailId":"xyz@gmail.com",
            "contactMe":1,
            "homeLoan":1
          } */
          const body = JSON.stringify(value);
        return this.http.post(this.adminURL + 'addClientData', body, httpOptions);
    }

    getTokenHeader() {
        const headerObj = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept',  'application/json');

        return headerObj;
    }

}
