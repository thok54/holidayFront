import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Modelo/Skill';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = new Skill();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Edit();
  }

  Edit() {
    let id = localStorage.getItem("id");
    this.service.getSkillById(+id).subscribe(data => {
      this.skill = data;
    });
  }

  Update(skill: Skill) {
    this.service.updateSkill(skill).subscribe(data => {
      this.skill = data;
      this.router.navigate(["skills"]);
    });
  }

}
