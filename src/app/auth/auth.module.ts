import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModules } from '../shared/modules/modules-shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './components/views/logout/logout.component';


@NgModule({
  declarations: [AuthComponent, LogoutComponent, AuthRoutingModule.components],

  imports: [
    AuthRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModules
  ],

  schemas: [],

  providers: [],

  bootstrap: [AuthComponent],
})
export class AuthModule {}
