import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from './Service/authentication.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, private loginService:AuthenticationService) {}

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
}
