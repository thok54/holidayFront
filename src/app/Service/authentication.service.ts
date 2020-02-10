import { Injectable } from "@angular/core";
import { CapUser } from "../Modelo/CapUser";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  cap_user: CapUser;
  constructor(private http: HttpClient) {}

  async authenticate(email, password) {
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
