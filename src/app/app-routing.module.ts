import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let moduleToLoad;

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Custom-matched route
  {
    matcher: url => {
      // Get user type from localStorage
      const user_type = localStorage.getItem('user_type');

      // Assign the submodule based on the user type
      switch (user_type) {
        case 'user':
          moduleToLoad = import('./user/user.module').then(m => m.UserModule);
          break;
        case 'admin':
          moduleToLoad = import('./admin/admin.module').then(m => m.AdminModule);
          break;
        case 'guest':
          moduleToLoad = import('./guest/guest.module').then(m => m.GuestModule);
          break;
        default:
          // Do not match this route if the user type is unknown
          return null;
      }

      // Match this route, keeping the subroute if any present (url.length > 0)
      return { consumed: url.length ? [] : url };
    },

    // Load the assigned submodule
    loadChildren: () => moduleToLoad
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
