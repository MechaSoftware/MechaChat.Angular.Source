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
  providers: [SettingsService, DashboardStatusService],
})
export class AppModule {}
