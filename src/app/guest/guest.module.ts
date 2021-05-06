import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  declarations: [GuestComponent]
})
export class GuestModule { }
