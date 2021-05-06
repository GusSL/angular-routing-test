import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_core/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    data: { roles: ['user'] },
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'guest',
    canActivate: [AuthGuard],
    data: { roles: ['guest'] },
    loadChildren: () =>
      import('./guest/guest.module').then((m) => m.GuestModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
