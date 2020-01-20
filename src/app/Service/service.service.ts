import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CapUser } from "../Modelo/CapUser";
import { Employee } from "../Modelo/Employee";
import { Absence } from "../Modelo/Absence";
import { Project } from "../Modelo/Project";
import { Skill } from "../Modelo/Skill";
import { EPP } from "../Modelo/EPP";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  UrlUser = "http://localhost:8080/cap_user";
  UrlEmployee = "http://localhost:8080/employee";
  UrlAbsence = "http://localhost:8080/absence";
  UrlProject = "http://localhost:8080/project";
  UrlSkill = "http://localhost:8080/skill";
  UrlEPP = "http://localhost:8080/employee_project_period";
  UrlLogIn = "http://localhost:8080/login";
  UrlLogOut = "http://localhost:8080/logout";

  login(){
    return this.http.get<any>(this.UrlLogIn);
  }

  logout(){
    return this.http.get<any>(this.UrlLogOut);
  }

  getCapUsers() {
    return this.http.get<CapUser[]>(this.UrlUser);
  }
  addCapUser(cap_user: CapUser) {
    return this.http.post<CapUser>(this.UrlUser, cap_user);
  }
  getCapUserById(id: number) {
    return this.http.get<CapUser>(this.UrlUser + "/" + id);
  }
  updateCapUser(cap_user: CapUser) {
    return this.http.put<CapUser>(this.UrlUser + "/" + cap_user.id, cap_user);
  }
  deleteCapUser(cap_user: CapUser) {
    return this.http.delete<CapUser>(this.UrlUser + "/" + cap_user.id);
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.UrlEmployee);
  }
  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.UrlEmployee, employee);
  }
  getEmployeeById(id: number) {
    return this.http.get<Employee>(this.UrlEmployee + "/" + id);
  }
  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(
      this.UrlEmployee + "/" + employee.id,
      employee
    );
  }
  deleteEmployee(employee: Employee) {
    return this.http.delete<Employee>(this.UrlEmployee + "/" + employee.id);
  }

  getAbsences() {
    return this.http.get<Absence[]>(this.UrlAbsence);
  }
  addAbsence(absence: Absence) {
    return this.http.post<Absence>(this.UrlAbsence, absence);
  }
  getAbsenceById(id: number) {
    return this.http.get<Absence>(this.UrlAbsence + "/" + id);
  }
  updateAbsence(absence: Absence) {
    return this.http.put<Absence>(this.UrlAbsence + "/" + absence.id, absence);
  }
  deleteAbsence(absence: Absence) {
    return this.http.delete<Absence>(this.UrlAbsence + "/" + absence.id);
  }

  getProjects() {
    return this.http.get<Project[]>(this.UrlProject);
  }
  addProject(project: Project) {
    return this.http.post<Project>(this.UrlProject, project);
  }
  getProjectById(id: number) {
    return this.http.get<Project>(this.UrlProject + "/" + id);
  }
  updateProject(project: Project) {
    return this.http.put<Project>(this.UrlProject + "/" + project.id, project);
  }
  deleteProject(project: Project) {
    return this.http.delete<Project>(this.UrlProject + "/" + project.id);
  }

  getSkills() {
    return this.http.get<Skill[]>(this.UrlSkill);
  }
  addSkill(skill: Skill) {
    return this.http.post<Skill>(this.UrlSkill, skill);
  }
  getSkillById(id: number) {
    return this.http.get<Skill>(this.UrlSkill + "/" + id);
  }
  updateSkill(skill: Skill) {
    return this.http.put<Skill>(this.UrlSkill + "/" + skill.id, skill);
  }
  deleteSkill(skill: Skill) {
    return this.http.delete<Skill>(this.UrlSkill + "/" + skill.id);
  }

  getEPPs() {
    return this.http.get<EPP[]>(this.UrlEPP);
  }
  addEPP(epp: EPP) {
    return this.http.post<EPP>(this.UrlEPP, epp);
  }
  getEPPById(id: number) {
    return this.http.get<EPP>(this.UrlEPP + "/" + id);
  }
  updateEPP(epp: EPP) {
    return this.http.put<EPP>(this.UrlEPP + "/" + epp.id, epp);
  }
  deleteEPP(epp: EPP) {
    return this.http.delete<EPP>(this.UrlEPP + "/" + epp.id);
  }
}
