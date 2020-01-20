import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Modelo/Skill';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListSkillComponent implements OnInit {

  skills: Skill[];
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  Add() {
    this.router.navigate(["addSkill"]);
  }

  Edit(skill: Skill): void {
    localStorage.setItem("id", skill.id.toString());
    this.router.navigate(["editSkill"]);
  }

  Delete(skill: Skill) {
    this.service.deleteSkill(skill).subscribe(data => {
      this.skills = this.skills.filter(p => p !== skill);
    });
  }

}
