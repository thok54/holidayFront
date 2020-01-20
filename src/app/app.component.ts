import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "./Service/service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private service: ServiceService, private router: Router) {}

  CapUser() {
    this.router.navigate(["capUsers"]);
  }

  Employee() {
    this.router.navigate(["employees"]);
  }

  Absence() {
    this.router.navigate(["absences"]);
  }

  Project() {
    this.router.navigate(["projects"]);
  }

  Skill() {
    this.router.navigate(["skills"]);
  }

  EPP() {
    this.router.navigate(["epps"]);
  }

  LogIn() {
    this.service.login().subscribe();
  }

  LogOut() {
    this.service.logout().subscribe();
  }
}
