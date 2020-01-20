import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "../../Service/service.service";
import { Employee } from "src/app/Modelo/Employee";

@Component({
  selector: "app-list-employee",
  templateUrl: "./list-employee.component.html",
  styleUrls: ["./list-employee.component.css"]
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  Add() {
    this.router.navigate(["addEmployee"]);
  }

  Edit(employee: Employee): void {
    localStorage.setItem("id", employee.id.toString());
    this.router.navigate(["editEmployee"]);
  }

  Delete(employee: Employee) {
    this.service.deleteEmployee(employee).subscribe(data => {
      this.employees = this.employees.filter(p => p !== employee);
    });
  }
}

