import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModules } from '../../../../../shared/modules/modules-shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModules
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
