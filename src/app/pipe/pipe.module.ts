import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimePipe } from './datetime.pipe';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [DatetimePipe, SafePipe],
  imports: [
    CommonModule
  ],
  exports: [
    DatetimePipe,
    SafePipe]
})
export class PipeModule { }
