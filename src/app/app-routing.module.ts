import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from "./CapUser/list/list.component";
import { EditComponent } from "./CapUser/edit/edit.component";
import { DeleteComponent } from "./CapUser/delete/delete.component";
import { AddComponent } from "./CapUser/add/add.component";

import { ListEmployeeComponent } from "./Employee/list-employee/list-employee.component";
import { EditEmployeeComponent } from "./Employee/edit-employee/edit-employee.component";
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
import { AuthGuardService } from './Service/auth-guard.service';




const routes: Routes = [
  { path: "capUsers", component: ListComponent, canActivate:[AuthGuardService] },
  { path: "editUser", component: EditComponent, canActivate:[AuthGuardService] },
  { path: "addUser", component: AddComponent, canActivate:[AuthGuardService] },
  { path: "deleteUser", component: DeleteComponent, canActivate:[AuthGuardService] },

  { path: "employees", component: ListEmployeeComponent, canActivate:[AuthGuardService] },
  { path: "editEmployee", component: EditEmployeeComponent, canActivate:[AuthGuardService] },

  { path: "absences", component: ListAbsenceComponent, canActivate:[AuthGuardService] },
  { path: "editAbsence", component: EditAbsenceComponent, canActivate:[AuthGuardService] },
  { path: "addAbsence", component: AddAbsenceComponent, canActivate:[AuthGuardService] },
  { path: "deleteAbsence", component: DeleteAbsenceComponent, canActivate:[AuthGuardService] },

  { path: "projects", component: ListProjectComponent, canActivate:[AuthGuardService] },
  { path: "editProject", component: EditProjectComponent, canActivate:[AuthGuardService] },
  { path: "addProject", component: AddProjectComponent, canActivate:[AuthGuardService] },
  { path: "deleteProject", component: DeleteProjectComponent, canActivate:[AuthGuardService] },

  { path: "skills", component: ListSkillComponent, canActivate:[AuthGuardService] },
  { path: "editSkill", component: EditSkillComponent, canActivate:[AuthGuardService] },
  { path: "addSkill", component: AddSkillComponent, canActivate:[AuthGuardService] },
  { path: "deleteSkill", component: DeleteSkillComponent, canActivate:[AuthGuardService] },
  
  { path: "epps", component: ListEPPComponent, canActivate:[AuthGuardService] },
  { path: "editEPP", component: EditEPPComponent, canActivate:[AuthGuardService] },
  { path: "addEPP", component: AddEPPComponent, canActivate:[AuthGuardService] },
  { path: "deleteEPP", component: DeleteEPPComponent, canActivate:[AuthGuardService] },

  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent, canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
