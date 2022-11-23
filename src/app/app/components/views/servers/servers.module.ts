import { NgModule } from '@angular/core';

import { SharedModules } from '../../../../shared/modules/modules-shared/shared.module';

import { ServersRoutingModule } from './servers-routing.module';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    ServerComponent
  ],
  imports: [
    ServersRoutingModule,
    SharedModules
  ]
})
export class ServersModule { }
