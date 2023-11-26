import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllComponent } from './components/writingArt/all/all.component';
import { HomeComponent } from './components/views/home/home.component';
import { DetailedComponent } from './components/writingArt/detailed/detailed.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "all",
  component: AllComponent
}, {
  path: "details",
  component: DetailedComponent

}];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
