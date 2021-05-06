import { Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { PublicGuard } from "./guards/public.guard";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

export const AppRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [PublicGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [PublicGuard],
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "login",
  },
];
