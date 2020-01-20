import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Modelo/Project';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditProjectComponent implements OnInit {

  project: Project = new Project();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getProjectById(+id).subscribe(data => {
      this.project = data;
    });
  }

  Update(project: Project) {
    this.service.updateProject(project).subscribe(data => {
      this.project = data;
      this.router.navigate(["projects"]);
    });
  }

}
