import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './components/views/logout/logout.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        children: [
          {
            path: 'login',
            loadChildren: () =>
              import('./components/views/login/login.module').then(
                (m) => m.LoginModule
              ),
          },
          {
            path: 'register',
            loadChildren: () =>
              import('./components/views/register/register.module').then(
                (m) => m.RegisterModule
              ),
          },
          {
            path: 'logout',
            component: LogoutComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [AuthComponent, LogoutComponent];
}
