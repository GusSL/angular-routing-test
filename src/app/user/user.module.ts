import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { TaskManagementComponent } from './pages/task-management/task-management.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, TaskManagementComponent, ConfigurationComponent]
})
export class UserModule { }
