import { Component, OnInit } from "@angular/core";
import { UserService } from "app/services/user.service";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  constructor(private userService: UserService) {
    this.loadUsersByPage(1);
  }

  ngOnInit() {}

  loadUsersByPage(page: number) {
    this.userService.loadUsers(page);
  }
}
