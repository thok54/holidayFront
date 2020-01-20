import { Component, OnInit } from '@angular/core';
import { EPP } from 'src/app/Modelo/EPP';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddEPPComponent implements OnInit {

  epp: EPP = new EPP();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {}

  Save(id_employee: number, id_project: number, start_date: Date, end_date: Date, dedication: number,) {
    this.epp.idEmployee = id_employee;
    this.epp.idProject = id_project;
    this.epp.startDate = start_date;
    this.epp.endDate = end_date;
    this.epp.dedication = dedication;

    this.service.addEPP(this.epp).subscribe(data => {
      this.router.navigate(["epps"]);
    });
  }

}
