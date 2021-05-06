import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "app/app.reducers";
import { User } from "app/interface/User";
import { StartLoadingAction } from "app/reducer/ui/ui.actions";
import { UserService } from "app/services/user.service";
import { Subscription } from "rxjs";

@Component({
  moduleId: module.id,
  selector: "maps-cmp",
  templateUrl: "maps.component.html",
})
export class MapsComponent implements OnInit, OnDestroy {
  formCreate: FormGroup;
  showEmailError: boolean = false;
  loading: boolean = false;
  subscription: Subscription = new Subscription();

  createFormCreate(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/\d/),
        Validators.pattern(/[a-zA-Z]/),
      ]),
      role: new FormControl("user", Validators.required),
    });
  }

  constructor(
    private store: Store<AppState>,
    private userService: UserService
  ) {
    this.formCreate = this.createFormCreate();
  }

  ngOnInit() {
    this.subscription = this.store
      .select("ui")
      .subscribe(({ loading }) => (this.loading = loading));
  }

  onSubmit() {
    this.showEmailError = false;
    this.store.dispatch(new StartLoadingAction());
    const value = this.formCreate.get("email").value.split("@");
    if (!this.formCreate.invalid && value[1] === "ufps.edu.co") {
      const user: User = this.formCreate.value;
      this.userService.createUser(user);
    } else {
      this.showEmailError = true;
    }
  }

  get name() {
    return this.formCreate.get("name");
  }

  get email() {
    return this.formCreate.get("email");
  }

  get password() {
    return this.formCreate.get("password");
  }

  get role() {
    return this.formCreate.get("role");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
