import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatDate'})
export class FormatDate implements PipeTransform {
  transform(value: string): string {
    return this.formatDate(value);
  }

  formatDate(date){
    let monthsAr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسيمبر"];
    let monthsEn = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let day = date.split("-")[0];
    let monthEN = date.split("-")[1];
    let year = date.split("-")[2];

    let index = monthsEn.indexOf(monthEN);
    let monthAr = monthsAr[index];

    return day + " " + monthAr + " " + year + "20";
    
  }
}