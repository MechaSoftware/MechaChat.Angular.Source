import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CommunityComponent } from "./community/community.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/app/dashboard/home",
    pathMatch: "full",
  },
  {
    path: ":community",
    redirectTo: "/app/community/:community/home",
    pathMatch: "full",
  },
  {
    path: ":community/home",
    component: CommunityComponent,
  },
  {
    path: ":community/channels/:channelId",
    component: CommunityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunitiesRoutingModule {}
