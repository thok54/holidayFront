import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../Service/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  //TWEAK DEFAULT VALUES IN LABELS
  email = "jeck@gmail.com";
  password = "password";
  invalidLogin = false;

  constructor(
    private router: Router,
    private loginservice: AuthenticationService
  ) {}

  ngOnInit() {}

  checkLogin(){
    if(this.loginservice.authenticate(this.email, this.password))
    {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
    this.invalidLogin = true
  }
}
