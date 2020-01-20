import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Modelo/Skill';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddSkillComponent implements OnInit {

  skill: Skill = new Skill();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {}

  Save(name: String, description: String, start_date: Date) {
    this.skill.name = name;
    this.skill.description = description;

    this.service.addSkill(this.skill).subscribe(data => {
      this.router.navigate(["skills"]);
    });
  }

}
