import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/Modelo/Absence';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddAbsenceComponent implements OnInit {

  absence: Absence = new Absence();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {}

  Save(employee_id: number, type: String, description: String, start_date: Date) {
    this.absence.idEmployee = employee_id;
    this.absence.type = type;
    this.absence.description = description;
    this.absence.startDate = start_date;

    this.service.addAbsence(this.absence).subscribe(data => {
      this.router.navigate(["absences"]);
    });
  }

}
