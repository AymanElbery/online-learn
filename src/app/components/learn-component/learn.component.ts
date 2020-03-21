import { Component } from '@angular/core';
import { LearnService } from './../../services/learn.service';
import { MetricService } from '../../services/metrics.service';

@Component({
  selector: 'learn-root',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {

  totalSessions;
  totalDuration;
  totalHours;
  totalMinutes;
  totalSeconds;
  attend;
  attendUnique;
  asyncSessions;

  list; list2;
  univs;
  studentCount;
  stuffCount;
  coursesCount;

  totalLogins;
  assesmentCount;
  discussCount;
  docsCount;

  date;
  dayWeek;
  dates;

  allUnivs = true;
  constructor(private learnService: LearnService, private metricService: MetricService) {
    this.load();
  }

  load(){
    this.getDates();
    this.loadUnivs();
    this.loadResources();
    this.loadResources2();
  }

  loadUnivs(){
    this.learnService.getAllUnivs().subscribe(
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
    this.learnService.getLearn().subscribe(
      (response: any) => {
        if (response) {
          this.list = response.data;
          let totals = this.getLearnsTotals(this.list);
          this.totalLogins = totals['totalLogins'];
          this.assesmentCount = totals['assesmentCount'];
          this.discussCount = totals['discussCount'];
          this.docsCount = totals['docsCount'];
          
        }
      },
      error => {}
    );
  }

  getDates(){
    this.learnService.getDates().subscribe(
      (response: any) => {
        if (response) {
          this.dates = this.getUnigueDates(response.data);
        }
      },
      error => {}
    );
  }

  getUnigueDates(dates){
    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }
    const uniqueAges = dates.filter(unique);
    return uniqueAges;
  }

  loadResources2(){
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
    return totals;
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

  getLearnsTotals(list){
    let totals = [];
    totals['totalLogins'] = 0;
    totals['assesmentCount'] = 0;
    totals['discussCount'] = 0;
    totals['docsCount'] = 0;
    for (let i = 0; i < list.length; i++) {
      totals['totalLogins'] += Number(list[i].TOTAL_LOGIN);
      totals['assesmentCount'] += Number(list[i].ASSESSMENTS_COUNT);
      totals['discussCount'] += Number(list[i].DISCUSSIONS_COUNT);
      totals['docsCount'] += Number(list[i].DOC_COUNT);
    }
    this.dayWeek = list[0].DAY_WEEK;
    return totals;
  }



  onOptionsSelected(value){
    if (value == "all") {
      this.loadUnivs();
      this.loadResources();
      this.loadResources2();
    } else {
      this.getUnivData(value); 
    }
  }

  onDateSelected(value){
    if (value == "all") {
      this.loadUnivs();
      this.loadResources();
      this.loadResources2();
    } else {
      this.getDayData(value); 
    }
  }


  getUnivData(id){
    this.learnService.getUnivsById(id).subscribe(
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

    this.learnService.getLearnByUnivId(id).subscribe(
      (response: any) => {
        if (response) {
          this.list = response.data;
          let totals = this.getLearnsTotals(this.list);
          this.totalLogins = totals['totalLogins'];
          this.assesmentCount = totals['assesmentCount'];
          this.discussCount = totals['discussCount'];
          this.docsCount = totals['docsCount'];
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

  getDayData(date){

    this.learnService.getLearnByDate(date).subscribe(
      (response: any) => {
        if (response) {
          this.list = response.data;
          let totals = this.getLearnsTotals(this.list);
          this.totalLogins = totals['totalLogins'];
          this.assesmentCount = totals['assesmentCount'];
          this.discussCount = totals['discussCount'];
          this.docsCount = totals['docsCount'];
        }
      },
      error => {}
    );

    this.metricService.getMetricsByDate(date).subscribe(
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
