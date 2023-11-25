import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllComponent } from './components/writingArt/all/all.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "all",
  component: AllComponent
}];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
