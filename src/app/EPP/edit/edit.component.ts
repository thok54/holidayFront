import { Component, OnInit } from '@angular/core';
import { EPP } from 'src/app/Modelo/EPP';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditEPPComponent implements OnInit {

  epp: EPP = new EPP();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getEPPById(+id).subscribe(data => {
      this.epp = data;
    });
  }

  Update(epp: EPP) {
    this.service.updateEPP(epp).subscribe(data => {
      this.epp = data;
      this.router.navigate(["epps"]);
    });
  }

}
