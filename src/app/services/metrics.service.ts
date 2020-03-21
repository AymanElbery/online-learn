import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class MetricService {

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

    getUnivsById(id) {
        return this.http.get(this.URL + "blackboard/universitiesbyid/"+id, {
            headers: this.headers
        });
    }

    getMetrics() {
        return this.http.get(this.URL + "blackboard/metrics", {
            headers: this.headers
        });
    }

    getMetricsByUnivId(id) {
        return this.http.get(this.URL + "blackboard/metricsbyid/"+id, {
            headers: this.headers
        });
    }

    getMetricsByDate(date) {
        return this.http.get(this.URL + "blackboard/metricsbydate/"+date, {
            headers: this.headers
        });
    }
}

