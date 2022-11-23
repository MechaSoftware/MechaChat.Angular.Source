import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {
    path: ':server/home',
    component: ServerComponent,
  },
  {
    path: ':server/channels/:channelId',
    component: ServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
