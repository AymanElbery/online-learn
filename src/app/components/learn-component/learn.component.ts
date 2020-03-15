import { Component } from '@angular/core';
import { LearnService } from './../../services/learn.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'learn-root',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {

  list;
  univs;
  studentCount;
  stuffCount;
  coursesCount;
  date= new FormControl(new Date());
  startDate;
  endDate;
  constructor(private learnService: LearnService) {
    this.endDate = "3/15/2020";
    this.loadUnivs();
    this.loadResources();

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
        }
      },
      error => {}
    );
  }

}
