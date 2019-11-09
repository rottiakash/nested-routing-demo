import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Link2RoutingModule } from './link2-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';


@NgModule({
  declarations: [WrapperComponent, Test1Component, Test2Component],
  imports: [
    CommonModule,
    Link2RoutingModule
  ]
})
export class Link2Module { }
