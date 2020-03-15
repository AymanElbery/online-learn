import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from '../app/components/learn-component/learn.component'
import { MetricsComponent } from '../app/components/metrics-component/metrics.component'


const routes: Routes = [
  {
    path: "",
    redirectTo: "/learn",
    pathMatch: "full"
  },
  {
    path: "learn",
    component: LearnComponent
  },
  {
    path: "metrics",
    component: MetricsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}