import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from "./CapUser/list/list.component";
import { EditComponent } from "./CapUser/edit/edit.component";
import { DeleteComponent } from "./CapUser/delete/delete.component";
import { AddComponent } from "./CapUser/add/add.component";

import { ListEmployeeComponent } from "./Employee/list-employee/list-employee.component";
import { EditEmployeeComponent } from "./Employee/edit-employee/edit-employee.component";
import { AddEmployeeComponent } from "./Employee/add-employee/add-employee.component";
import { DeleteEmployeeComponent } from "./Employee/delete-employee/delete-employee.component";
import { ListAbsenceComponent } from './Absence/list/list.component';
import { EditAbsenceComponent } from './Absence/edit/edit.component';
import { AddAbsenceComponent } from './Absence/add/add.component';
import { DeleteAbsenceComponent } from './Absence/delete/delete.component';
import { ListProjectComponent } from './Project/list/list.component';
import { EditProjectComponent } from './Project/edit/edit.component';
import { AddProjectComponent } from './Project/add/add.component';
import { DeleteProjectComponent } from './Project/delete/delete.component';
import { ListSkillComponent } from './Skill/list/list.component';
import { EditSkillComponent } from './Skill/edit/edit.component';
import { AddSkillComponent } from './Skill/add/add.component';
import { DeleteSkillComponent } from './Skill/delete/delete.component';
import { ListEPPComponent } from './EPP/list/list.component';
import { EditEPPComponent } from './EPP/edit/edit.component';
import { AddEPPComponent } from './EPP/add/add.component';
import { DeleteEPPComponent } from './EPP/delete/delete.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';




const routes: Routes = [
  { path: "capUsers", component: ListComponent },
  { path: "editUser", component: EditComponent },
  { path: "addUser", component: AddComponent },
  { path: "deleteUser", component: DeleteComponent },

  { path: "employees", component: ListEmployeeComponent },
  { path: "editEmployee", component: EditEmployeeComponent },
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "deleteEmployee", component: DeleteEmployeeComponent },

  { path: "absences", component: ListAbsenceComponent },
  { path: "editAbsence", component: EditAbsenceComponent },
  { path: "addAbsence", component: AddAbsenceComponent },
  { path: "deleteAbsence", component: DeleteAbsenceComponent },

  { path: "projects", component: ListProjectComponent },
  { path: "editProject", component: EditProjectComponent },
  { path: "addProject", component: AddProjectComponent },
  { path: "deleteProject", component: DeleteProjectComponent },

  { path: "skills", component: ListSkillComponent },
  { path: "editSkill", component: EditSkillComponent },
  { path: "addSkill", component: AddSkillComponent },
  { path: "deleteSkill", component: DeleteSkillComponent },
  
  { path: "epps", component: ListEPPComponent },
  { path: "editEPP", component: EditEPPComponent },
  { path: "addEPP", component: AddEPPComponent },
  { path: "deleteEPP", component: DeleteEPPComponent },

  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
