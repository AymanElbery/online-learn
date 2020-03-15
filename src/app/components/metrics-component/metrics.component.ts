import { Component } from '@angular/core';
import { MetricService } from '../../services/metrics.service';

@Component({
  selector: 'metrics-root',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent {

  list;
  univs;
  studentCount;
  stuffCount;
  coursesCount;
  constructor(private metricService: MetricService) {

    this.loadUnivs();
    this.loadResources();

  }

  loadUnivs(){
    this.metricService.getAllUnivs().subscribe(
      (response: any) => {
        if (response) {
          this.univs = response.data;
          this.studentCount = this.univs[0].STUDENT_COUNT;
          this.stuffCount = this.univs[0].STUFF_COUNT;
          this.coursesCount = this.univs[0].COURSES_COUNT;
        }
      },
      error => {}
    );
  }

  loadResources(){
    this.metricService.getMetrics().subscribe(
      (response: any) => {
        if (response) {
          this.list = response.data;
        }
      },
      error => {}
    );
  }

}
