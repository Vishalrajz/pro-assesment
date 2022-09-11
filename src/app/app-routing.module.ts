import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddGenQnComponent } from "./pages/add-gen-qn/add-gen-qn.component";
import { AddTechQnComponent } from "./pages/add-tech-qn/add-tech-qn.component";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "./pages/admin-login/admin-login.component";
import { AssessmentComponent } from "./pages/assessment/assessment.component";
import { GenQnListComponent } from "./pages/gen-qn-list/gen-qn-list.component";
import { HomeComponent } from "./pages/home/home.component";
import { TeamListComponent } from "./pages/team-list/team-list.component";
import { TechQnListComponent } from "./pages/tech-qn-list/tech-qn-list.component";
import { UpdateGenQnComponent } from "./pages/update-gen-qn/update-gen-qn.component";
import { UpdateTechQnComponent } from "./pages/update-tech-qn/update-tech-qn.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "assessment", component: AssessmentComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "add-gen-qn", component: AddGenQnComponent },
  { path: "add-tech-qn", component: AddTechQnComponent },
  { path: "edit-gen-qn/:id", component: UpdateGenQnComponent },
  { path: "edit-tech-qn/:id", component: UpdateTechQnComponent },
  { path: "edit-tech-qn", component: UpdateTechQnComponent },
  { path: "gen-qn-list", component: GenQnListComponent },
  { path: "tech-qn-list", component: TechQnListComponent },
  { path: "team-list", component: TeamListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
