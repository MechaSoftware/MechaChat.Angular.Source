import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { SharedModules } from '../../../../shared/modules/modules-shared/shared.module';

@NgModule({
  imports: [
    RegisterRoutingModule,
    SharedModules
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
