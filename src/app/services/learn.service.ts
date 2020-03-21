import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
        private http: HttpClient
    ) {}

    getAllUnivs() {
        return this.http.get(this.URL + "blackboard/universities", {
            headers: this.headers
        });
    }

    getUnivsById(id) {
        return this.http.get(this.URL + "blackboard/universitiesbyid/"+id, {
            headers: this.headers
        });
    }

    getLearn() {
        return this.http.get(this.URL + "blackboard/learn", {
            headers: this.headers
        });
    }

    getLearnByUnivId(id) {
        return this.http.get(this.URL + "blackboard/learnbyid/"+id, {
            headers: this.headers
        });
    }

    getDates() {
        return this.http.get(this.URL + "blackboard/dates", {
            headers: this.headers
        });
    }

    getLearnByDate(date) {
        return this.http.get(this.URL + "blackboard/learnbydate/"+date, {
            headers: this.headers
        });
    }
}
