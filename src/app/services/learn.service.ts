import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class LearnService {

    URL = environment.baselink + environment.servicesprefix + "/rest/online/";
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.auth
    });

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    getAllUnivs() {
        return this.http.get(this.URL + "blackboard/universities", {
            headers: this.headers
        });
    }

    getLearn() {
        return this.http.get(this.URL + "blackboard/learn", {
            headers: this.headers
        });
    }
}
