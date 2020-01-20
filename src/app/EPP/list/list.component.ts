import { Component, OnInit } from '@angular/core';
import { EPP } from 'src/app/Modelo/EPP';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListEPPComponent implements OnInit {

  epp: EPP[];
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getEPPs().subscribe(data => {
      this.epp = data;
      console.log(this.epp.forEach(element => {
        console.log(element);
      }));
    }); 
  }

  Add() {
    this.router.navigate(["addEPP"]);
  }

  Edit(project: EPP): void {
    localStorage.setItem("id", project.id.toString());
    this.router.navigate(["editEPP"]);
  }

  Delete(project: EPP) {
    this.service.deleteEPP(project).subscribe(data => {
      this.epp = this.epp.filter(p => p !== project);
    });
  }
}
