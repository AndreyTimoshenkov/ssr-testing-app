import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeCompComponent } from './some-comp.component';

@NgModule({
  declarations: [
    SomeCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SomeCompComponent
  ]
})
export class SomeCompModule {}
