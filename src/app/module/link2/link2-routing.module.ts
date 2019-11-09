import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';


const routes: Routes = [
  {path:"",component:WrapperComponent,children:[
    {path:"",redirectTo:"test1",pathMatch:"full"},
    {path:"test1",component:Test1Component},
    {path:"test2",component:Test2Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Link2RoutingModule { }
