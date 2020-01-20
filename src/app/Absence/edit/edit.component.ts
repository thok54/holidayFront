import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/Modelo/Absence';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditAbsenceComponent implements OnInit {

  absence: Absence = new Absence();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getAbsenceById(+id).subscribe(data => {
      this.absence = data;
    });
  }

  Update(absence: Absence) {
    this.service.updateAbsence(absence).subscribe(data => {
      this.absence = data;
      this.router.navigate(["absences"]);
    });
  }

}
