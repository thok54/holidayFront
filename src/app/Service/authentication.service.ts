import { Injectable } from "@angular/core";
import { CapUser } from "../Modelo/CapUser";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  cap_user: CapUser;
  logSucceeds: boolean = false;
  constructor(private http: HttpClient) {}

  async authenticate(email, password) {
    /* this.logSucceeds =this.http
      .get<boolean>("http://localhost:8080/cap_user/login/" + email + "/" + password)
      .subscribe(data=> this.logSucceeds = data); */


    this.cap_user = await this.http
      .get<CapUser>("http://localhost:8080/cap_user/email/" + email)
      .toPromise();
    if (password === this.cap_user.password) {
      sessionStorage.setItem("email", email);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let email = sessionStorage.getItem("email");
    return !(email === null);
  }

  logOut() {
    sessionStorage.removeItem("email");
  }
}
