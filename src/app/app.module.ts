import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from "@angular/core";

import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { SharedModules } from "./shared/modules/modules-shared/shared.module";

import { SettingsService } from "./app/layers/settings/settings.service";
import { HttpService } from "./services/http.service";
import { AuthInterceptor } from "./http-interceptors/auth-interceptor";

import { RootRoutingModule } from "./app-routing.module";

import { ToastrModule } from "ngx-toastr";
import { AuthModule } from "./auth/auth.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/views/home/home.component";
import { Error404Component } from "./components/views/error-404/error404.component";
import { SplashScreenComponent } from "./components/splash-screen/splash-screen.component";
import { SettingsComponent } from "./app/layers/settings/settings.component";
import { ThemeAppearance } from "./app/layers/settings/theme-appearance/theme-appearance.component";
import { PlusComponent } from "./components/views/plus/plus.component";
import { ManagePlusComponent } from "./components/views/plus/manage-plus/manage-plus.component";
import { MainNavbarComponent } from "./components/views/shared/main-navbar/main-navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    SplashScreenComponent,
    SettingsComponent,
    ThemeAppearance,
    PlusComponent,
    ManagePlusComponent,
    MainNavbarComponent,
  ],

  imports: [
    RootRoutingModule,
    SharedModules,
    ToastrModule.forRoot({
      timeOut: 3000,
      extendedTimeOut: 3000,
      positionClass: "toast-bottom-left",
      closeButton: true,
      progressBar: true,
    }),
    AuthModule,
  ],

  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    SettingsService,
  ],

  bootstrap: [AppComponent],
})

export class AppModule { }
