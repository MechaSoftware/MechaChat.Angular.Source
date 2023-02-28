import { NgModule } from "@angular/core";

import { SharedModules } from "../../../../shared/modules/modules-shared/shared.module";

import { CommunitiesRoutingModule } from "./communities-routing.module";
import { CommunityComponent } from "./community/community.component";

@NgModule({
  declarations: [CommunityComponent],
  imports: [CommunitiesRoutingModule, SharedModules],
})
export class CommunitiesModule {}
