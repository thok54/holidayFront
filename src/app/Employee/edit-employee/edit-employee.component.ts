import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Modelo/Employee';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getEmployeeById(+id).subscribe(data => {
      this.employee = data;
    });
  }

  Update(employee: Employee) {
    this.service.updateEmployee(employee).subscribe(data => {
      this.employee = data;
      this.router.navigate(["employees"]);
    });
  }
}
