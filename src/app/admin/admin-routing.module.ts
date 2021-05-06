import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManagementComponent } from './pages/user-management/user-management.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

const routes: Routes = [
  { path: 'user-management', component: UserManagementComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: '', pathMatch: 'full', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
