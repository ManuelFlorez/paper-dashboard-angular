import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "app/app.reducers";
import { Subscription } from "rxjs";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  { path: "/icons", title: "Icons", icon: "nc-diamond", class: "" },
  { path: "/maps", title: "Crear Usuario", icon: "nc-pin-3", class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "nc-bell-55",
    class: "",
  },
  { path: "/user", title: "User Profile", icon: "nc-single-02", class: "" },
  {
    path: "/table/1",
    title: "Listado Usuarios",
    icon: "nc-tile-56",
    class: "",
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "nc-caps-small",
    class: "",
  },
  {
    path: "/upgrade",
    title: "Upgrade to PRO",
    icon: "nc-spaceship",
    class: "active-pro",
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit, OnDestroy {
  public menuItems: any[];

  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store.select("auth").subscribe(({ user }) => {
      if (user && user.role === "admin") {
        this.menuItems = ROUTES.filter((menuItem) => menuItem);
      } else {
        this.menuItems = ROUTES.filter(
          (menuItem) => menuItem.path !== "/maps"
        ).filter((menuItem) => menuItem.path !== "/table/1");
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
