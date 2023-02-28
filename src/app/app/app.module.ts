<<<<<<< HEAD
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeMyStatusDialog } from './dialogs/change-my-status-dialog/change-my-status-dialog';

import { SettingsService } from './layers/settings/settings.service';
import { DashboardStatusService } from './layouts/dashboard/dashboard.status.service';

import { SharedModules } from '../shared/modules/modules-shared/shared.module';

@NgModule({
  declarations: [AppComponent, ChangeMyStatusDialog],
  imports: [
    AppRoutingModule,
    SharedModules
  ],
=======
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChangeMyStatusDialog } from "./dialogs/change-my-status-dialog/change-my-status-dialog";
import { AddACommunityDialog } from "./dialogs/add-a-community-dialog/add-a-community-dialog";
import { CreateANewCommunityDialog } from "./dialogs/create-a-new-community-dialog/create-a-new-community-dialog";

import { SettingsService } from "./layers/settings/settings.service";
import { DashboardStatusService } from "./layouts/dashboard/dashboard.status.service";

import { SharedModules } from "../shared/modules/modules-shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ChangeMyStatusDialog,
    AddACommunityDialog,
    CreateANewCommunityDialog,
  ],
  imports: [AppRoutingModule, SharedModules],
>>>>>>> 651e671 (Update design + Start of communties)
  providers: [SettingsService, DashboardStatusService],
})
export class AppModule {}
