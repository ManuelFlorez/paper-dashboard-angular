import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "app/app.reducers";
import { AuthUser } from "app/interface/AuthResponse";
import { UserService } from "app/services/user.service";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  templateUrl: "table.component.html",
})
export class TableComponent implements OnInit, OnDestroy {
  users: AuthUser[];
  totalPages: number[];
  subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    private store: Store<AppState>,
    private router: ActivatedRoute
  ) {
    this.router.params.subscribe(({ page }) =>
      this.loadUsersByPage(parseInt(page))
    );
  }

  ngOnInit() {
    this.subscription = this.store
      .select("user")
      .pipe(
        map(({ dataPages }) => {
          if (dataPages) {
            return {
              users: dataPages.results,
              total: dataPages.totalPages,
            };
          }
        })
      )
      .subscribe((users) => {
        if (users) {
          this.users = users.users;
          this.totalPages = Array(users.total).fill(users.total);
        }
      });
  }

  loadUsersByPage(page: number) {
    this.userService.loadUsers(page);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
