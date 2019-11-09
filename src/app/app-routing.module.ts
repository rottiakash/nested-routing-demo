import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Link1Component } from './components/link1/link1.component';


const routes: Routes = [
  {path:"",redirectTo:"link1",pathMatch:"full"},
  {path:"link1",component:Link1Component},
  {path:"link2",loadChildren:"./module/link2/link2.module#Link2Module"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
