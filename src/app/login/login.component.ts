import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../Service/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  //You can leave email and password as "" so no credentials are added to the labels by default
  //email = "";
  //password = "";
  //*************************************************************************** */
  email = "jeck@gmail.com";
  password = "password";
  //*************************************************************************** */

  constructor(
    private router: Router,
    private loginservice: AuthenticationService
  ) {}

  ngOnInit() {}

  checkLogin() {
    if (this.loginservice.authenticate(this.email, this.password)) {
      this.router.navigate([""]);
    }
    else console.log("BAD CREDENTIALS!!!");
  }
}
