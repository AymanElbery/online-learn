import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from "@angular/material/input";
import {
  MatDatepickerModule
} from "@angular/material/datepicker";

import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { LearnComponent } from './components/learn-component/learn.component';
import { MetricsComponent } from './components/metrics-component/metrics.component';
import { HeaderComponent } from './components/header-component/header.component';
import { FooterComponent } from './components/footer-component/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatDate } from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    HeaderComponent,
    FooterComponent,
    MetricsComponent,
    FormatDate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
