import { Injectable } from "@angular/core";
import { CapUser } from "../Modelo/CapUser";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  cap_user: CapUser;
  constructor(private http: HttpClient) {}

  authenticate(email, password) {
    this.http
      .get<CapUser>("http://localhost:8080/cap_user/email/" + email)
      .subscribe(data => {
        this.cap_user = data;
      });

    if (password === this.cap_user.password) {
      sessionStorage.setItem("email", email);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("email");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("email");
  }
}
