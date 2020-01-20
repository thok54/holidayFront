import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Modelo/Employee';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {}

  Save() {
    this.service.addEmployee(this.employee).subscribe(data => {
      this.router.navigate(["employees"]);
    });
  }

}
