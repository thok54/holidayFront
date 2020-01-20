import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "src/app/Service/service.service";
import { CapUser } from "src/app/Modelo/CapUser";
import { Employee } from "src/app/Modelo/Employee";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  capUser: CapUser = new CapUser();
  employee: Employee = new Employee();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {}

  Save(first_name: String, last_name: String, email: String, password: String) {
    this.capUser.firstName = first_name;
    this.capUser.lastName = last_name;
    this.capUser.email = email;
    this.capUser.password = password;

    this.service.addCapUser(this.capUser).subscribe();

    this.service.addEmployee(this.employee).subscribe(data => {
      this.router.navigate(["capUsers"]);
    });
  }
}
