import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, UserManagementComponent, ConfigurationComponent]
})
export class AdminModule { }
