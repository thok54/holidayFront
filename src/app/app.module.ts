import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./CapUser/list/list.component";
import { AddComponent } from "./CapUser/add/add.component";
import { EditComponent } from "./CapUser/edit/edit.component";
import { DeleteComponent } from "./CapUser/delete/delete.component";
import { FormsModule } from "@angular/forms";
import { ServiceService } from "../app/Service/service.service";
import { HttpClientModule } from "@angular/common/http";
import { ListEmployeeComponent } from "./Employee/list-employee/list-employee.component";
import { EditEmployeeComponent } from "./Employee/edit-employee/edit-employee.component";
import { ListAbsenceComponent } from "./Absence/list/list.component";
import { EditAbsenceComponent } from "./Absence/edit/edit.component";
import { AddAbsenceComponent } from "./Absence/add/add.component";
import { DeleteAbsenceComponent } from "./Absence/delete/delete.component";
import { ListProjectComponent } from "./Project/list/list.component";
import { EditProjectComponent } from "./Project/edit/edit.component";
import { AddProjectComponent } from "./Project/add/add.component";
import { DeleteProjectComponent } from "./Project/delete/delete.component";
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

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    ListAbsenceComponent,
    EditAbsenceComponent,
    AddAbsenceComponent,
    DeleteAbsenceComponent,
    ListProjectComponent,
    EditProjectComponent,
    AddProjectComponent,
    DeleteProjectComponent,
    ListSkillComponent,
    EditSkillComponent,
    AddSkillComponent,
    DeleteSkillComponent,
    ListEPPComponent,
    EditEPPComponent,
    AddEPPComponent,
    DeleteEPPComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
