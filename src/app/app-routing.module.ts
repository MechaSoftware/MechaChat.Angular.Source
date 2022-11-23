import { Injectable, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Error404Component } from './components/views/error-404/error404.component';
import { HomeComponent } from './components/views/home/home.component';
import { PlusComponent } from './components/views/plus/plus.component';
import { ManagePlusComponent } from './components/views/plus/manage-plus/manage-plus.component';

import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { AppRoutingModule } from './app/app-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'plus', component: PlusComponent },
  { path: 'plus/manage', component: ManagePlusComponent, canActivate: [AuthService], },

  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'corrected',
      urlUpdateStrategy: 'deferred',
      onSameUrlNavigation: 'ignore',
    }),
  ],
  exports: [
    RouterModule,

    AuthModule,
    AuthRoutingModule,

    AppModule,
    AppRoutingModule,
  ],
  providers: [AuthComponent, AppComponent],
})
export class RootRoutingModule {
  static components = [HomeComponent, Error404Component];
}
