import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/Modelo/Absence';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListAbsenceComponent implements OnInit {

  absences: Absence[];
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getAbsences().subscribe(data => {
      this.absences = data;
    });
  }

  Add() {
    this.router.navigate(["addAbsence"]);
  }

  Edit(absence: Absence): void {
    localStorage.setItem("id", absence.id.toString());
    this.router.navigate(["editAbsence"]);
  }

  Delete(absence: Absence) {
    this.service.deleteAbsence(absence).subscribe(data => {
      this.absences = this.absences.filter(p => p !== absence);
    });
  }
}
