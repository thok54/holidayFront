import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "../../Service/service.service";
import { CapUser } from "src/app/Modelo/CapUser";
import { Employee } from 'src/app/Modelo/Employee';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  cap_users: CapUser[];
  employees: Employee[];
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getCapUsers().subscribe(data => {
      this.cap_users = data;
      console.log(data);
    });
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
      console.log(data);
    });
  }

  Add() {
    this.router.navigate(["addUser"]);
  }

  Edit(cap_user: CapUser): void {
    localStorage.setItem("id", cap_user.id.toString());
    this.router.navigate(["editUser"]);
  }

  Delete(cap_user: CapUser) {
    this.service.deleteCapUser(cap_user).subscribe(data => {
      this.cap_users = this.cap_users.filter(p => p !== cap_user);
    });
  }
}
