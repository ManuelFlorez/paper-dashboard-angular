import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "app/app.reducers";
import { User } from "app/interface/User";
import { UserPages } from "app/interface/UserResponse";
import { FinishLoadingAction } from "app/reducer/ui/ui.actions";
import { LoadUserAction } from "app/reducer/user/user.actions";
import { environment } from "environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class UserService {
  endpoint: String = environment.URL_BACKEND;

  constructor(
    private store: Store<AppState>,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  loadUsers(page: number) {
    let params = new HttpParams()
      .set("sortBy", "asc")
      .set("limit", "5")
      .set("page", page.toString());
    this.httpClient
      .get(this.endpoint + "/users", {
        params,
      })
      .subscribe((res: UserPages) => {
        this.store.dispatch(new FinishLoadingAction());
        page === 0
          ? this.router.navigate([`/table/${res.totalPages}`])
          : this.store.dispatch(new LoadUserAction(res));
      });
  }

  createUser(user: User) {
    this.httpClient
      .post(this.endpoint + "/users", user)
      .subscribe((_) => this.router.navigate(["/table/0"]));
  }
}
