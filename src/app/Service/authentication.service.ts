import { Injectable } from "@angular/core";
import { CapUser } from "../Modelo/CapUser";
import { ServiceService } from './service.service';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  cap_user: CapUser;
  constructor(private service: ServiceService) {}

  authenticate(email, password) {
    //TWEAK HERE
    this.cap_user = this.service.getCapUserByEmail(email).subscribe;
    /*this.service.getCapUserByEmail(email).subscribe(data => {
      this.cap_user = data;
    });*/
    console.log(this.cap_user);
    
    if (email === "javainuse" && password === "password") {
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
