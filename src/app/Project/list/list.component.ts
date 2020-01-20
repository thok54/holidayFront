import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Modelo/Project';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListProjectComponent implements OnInit {

  projects: Project[];
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  Add() {
    this.router.navigate(["addProject"]);
  }

  Edit(project: Project): void {
    localStorage.setItem("id", project.id.toString());
    this.router.navigate(["editProject"]);
  }

  Delete(project: Project) {
    this.service.deleteProject(project).subscribe(data => {
      this.projects = this.projects.filter(p => p !== project);
    });
  }

}
