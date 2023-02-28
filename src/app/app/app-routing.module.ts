import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "../services/auth.service";

import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  {
    path: "app",
    redirectTo: "/app/dashboard/home",
    pathMatch: "full",
  },
  {
    path: "app/dashboard",
    redirectTo: "/app/dashboard/home",
    pathMatch: "full",
  },
  {
    path: "app",
    children: [
      {
        path: "",
        children: [
          {
            path: "dashboard/home",
            loadChildren: () =>
              import("./components/views/dashboard/home/home.module").then(
                (m) => m.HomeModule
              ),
            canActivate: [AuthService],
          },
          {
            path: "community",
            loadChildren: () =>
              import("./components/views/communities/communities.module").then(
                (m) => m.CommunitiesModule
              ),
            canActivate: [AuthService],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static components = [AppComponent];
}
