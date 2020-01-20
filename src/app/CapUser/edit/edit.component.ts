import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "src/app/Service/service.service";
import { CapUser } from "src/app/Modelo/CapUser";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  cap_user: CapUser = new CapUser();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getCapUserById(+id).subscribe(data => {
      this.cap_user = data;
    });
  }

  Update(cap_user: CapUser) {
    this.service.updateCapUser(cap_user).subscribe(data => {
      this.cap_user = data;
      this.router.navigate(["capUsers"]);
    });
  }
}
