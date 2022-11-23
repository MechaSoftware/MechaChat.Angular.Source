import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { SharedModules } from '../../../../shared/modules/modules-shared/shared.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    SharedModules
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
