import { Component } from '@angular/core';
import { MetricService } from '../../services/metrics.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'metrics-root',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent {

  list2;
  univs;
  studentCount;
  stuffCount;
  coursesCount;

  totalSessions;
  totalDuration;
  totalHours;
  totalMinutes;
  totalSeconds;
  attend;
  attendUnique;
  asyncSessions;

  date;
  dayWeek

  allUnivs = true;
  constructor(private metricService: MetricService) {

    this.loadUnivs();
    this.loadResources();

  }

  loadUnivs(){
    this.metricService.getAllUnivs().subscribe(
      (response: any) => {
        if (response) {
          this.univs = response.data;
          let totals = this.getUnivsTotals(this.univs);;
          this.studentCount = totals['studentCount'];
          this.stuffCount = totals['stuffCount'];
          this.coursesCount = totals['coursesCount'];
        }
      },
      error => {}
    );
  }

  getUnivsTotals(univs){
    let totals = [];
    totals['studentCount'] = 0;
    totals['stuffCount'] = 0;
    totals['coursesCount'] = 0;
    for (let i = 0; i < univs.length; i++) {
      totals['studentCount'] += Number(univs[i].STUDENT_COUNT);
      totals['stuffCount'] += Number(univs[i].STUFF_COUNT);
      totals['coursesCount'] += Number(univs[i].COURSES_COUNT);
    }
    return totals;
  }

  loadResources(){
    this.metricService.getMetrics().subscribe(
      (response: any) => {
        if (response) {
          this.list2 = response.data;
          let totals = this.getMetricsTotals(this.list2);
          this.totalSessions = totals['totalSessions'];
          this.totalDuration = totals['totalDuration'];
          this.totalHours = totals['totalDuration'].split(":")[0];
          this.totalMinutes = totals['totalDuration'].split(":")[1];
          this.totalSeconds = totals['totalDuration'].split(":")[2];
          this.attend = totals['attend'];
          this.attendUnique = totals['attendUnique'];
          this.asyncSessions = totals['asyncSessions'];
        }
      },
      error => {}
    );
  }

  getMetricsTotals(list2){
    let totals = [];
    totals['totalSessions'] = 0;
    totals['totalDuration'] = "0:00:00";
    totals['attend'] = 0;
    totals['attendUnique'] = 0;
    totals['asyncSessions'] = 0;
    for (let i = 0; i < list2.length; i++) {
      totals['totalSessions'] += Number(list2[i].TOTAL_SESSIONS_COUNT);
      totals['attend'] += Number(list2[i].ATTENDANCE_COUNT);
      totals['attendUnique'] += Number(list2[i].UNIQUE_ATTENDANCE_COUNT);
      totals['asyncSessions'] += Number(list2[i].BIG_ASYNC_SESSIONS);
      totals['totalDuration'] = this.sumTimeDuration(totals['totalDuration'], list2[i].TOTAL_DURATION);
    }
    this.formatDate(list2[0].DATE_OF_DAY);
    this.dayWeek = list2[0].DAY_WEEK;
    return totals;
  }

  formatDate(date){
    let monthsAr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسيمبر"];
    let monthsEn = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let day = date.split("-")[0];
    let monthEN = date.split("-")[1];
    let year = date.split("-")[2];

    let index = monthsEn.indexOf(monthEN);
    let monthAr = monthsAr[index];

    this.date = day + " " + monthAr + " " + year + "20";
    
  }

  sumTimeDuration(time1, time2){
    let hours1, minutes1, seconds1;
    let hours2, minutes2, seconds2;
    let hoursRes, minutesRes, secondsRes;

    hours1    = time1.split(":")[0];
    minutes1  = time1.split(":")[1];
    seconds1  = time1.split(":")[2];

    hours2    = time2.split(":")[0];
    minutes2  = time2.split(":")[1];
    seconds2  = time2.split(":")[2];

    hoursRes = Number(hours1) + Number(hours2);
    minutesRes = Number(minutes1) + Number(minutes2);
    secondsRes = Number(seconds1) + Number(seconds2);

    hoursRes += Math.floor(minutesRes/60) ;
    minutesRes = Math.floor(minutesRes % 60);

    minutesRes += Math.floor(secondsRes/60) ;
    secondsRes = Math.floor(secondsRes % 60);   
    
    let result = hoursRes + ":" + minutesRes + ":" + secondsRes
    return result;
  }

  onOptionsSelected(value){
    if (value == "all") {
      this.loadUnivs();
      this.loadResources();
    } else {
      this.getUnivData(value); 
    }
  }

  getUnivData(id){

    this.metricService.getUnivsById(id).subscribe(
      (response: any) => {
        if (response) {
          let totals = this.getUnivsTotals(response.data);
          this.studentCount = totals['studentCount'];
          this.stuffCount = totals['stuffCount'];
          this.coursesCount = totals['coursesCount'];
        }
      },
      error => {}
    );

    this.metricService.getMetricsByUnivId(id).subscribe(
      (response: any) => {
        if (response) {
          this.list2 = response.data;
          let totals = this.getMetricsTotals(this.list2);
          this.totalSessions = totals['totalSessions'];
          this.totalDuration = totals['totalDuration'];
          this.totalHours = totals['totalDuration'].split(":")[0];
          this.totalMinutes = totals['totalDuration'].split(":")[1];
          this.totalSeconds = totals['totalDuration'].split(":")[2];
          this.attend = totals['attend'];
          this.attendUnique = totals['attendUnique'];
          this.asyncSessions = totals['asyncSessions'];
        }
      },
      error => {}
    );

  }

}
