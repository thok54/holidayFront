import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/Modelo/Project";
import { ServiceService } from "src/app/Service/service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddProjectComponent implements OnInit {
  project: Project = new Project();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {}

  Save(name: String, description: String, start_date: Date, end_date: Date) {
    this.project.name = name;
    this.project.description = description;
    this.project.startDate = start_date;
    this.project.endDate = end_date;

    this.service.addProject(this.project).subscribe(data => {
      this.router.navigate(["projects"]);
    });
  }
}
