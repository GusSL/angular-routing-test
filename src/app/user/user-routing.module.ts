import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { TaskManagementComponent } from './pages/task-management/task-management.component';

const routes: Routes = [
  { path: 'task-management', component: TaskManagementComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: '', pathMatch: 'full', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
