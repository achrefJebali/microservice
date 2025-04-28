import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

// Department components
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { DepartmentFormComponent } from './components/department/department-form/department-form.component';
import { DepartmentDetailsComponent } from './components/department/department-details/department-details.component';

// Contract components
import { ContractListComponent } from './components/contract/contract-list/contract-list.component';
import { ContractFormComponent } from './components/contract/contract-form/contract-form.component';
import { ContractDetailsComponent } from './components/contract/contract-details/contract-details.component';

// Team components
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { TeamFormComponent } from './components/team/team-form/team-form.component';
import { TeamDetailsComponent } from './components/team/team-details/team-details.component';

// Formation components
import { FormationListComponent } from './components/formation/formation-list/formation-list.component';
import { FormationFormComponent } from './components/formation/formation-form/formation-form.component';
import { FormationDetailsComponent } from './components/formation/formation-details/formation-details.component';

// Resource components
import { ResourceListComponent } from './components/resource/resource-list/resource-list.component';
import { ResourceFormComponent } from './components/resource/resource-form/resource-form.component';
import { ResourceDetailsComponent } from './components/resource/resource-details/resource-details.component';

// University components
import { UniversityListComponent } from './components/university/university-list/university-list.component';
import { UniversityFormComponent } from './components/university/university-form/university-form.component';
import { UniversityDetailsComponent } from './components/university/university-details/university-details.component';


import { EvaluationDetailsComponent } from './components/evaluation/evaluation-details/evaluation-details.component';
import { EvaluationFormComponent } from './components/evaluation/evaluation-form/evaluation-form.component';
import { EvaluationListComponent } from './components/evaluation/evaluation-list/evaluation-list.component';

// evaluation service components

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    PageNotFoundComponent,
    
    // Department
    DepartmentListComponent,
    DepartmentFormComponent,
    DepartmentDetailsComponent,
    
    // Contract
    ContractListComponent,
    ContractFormComponent,
    ContractDetailsComponent,
    
    // Team
    TeamListComponent,
    TeamFormComponent,
    TeamDetailsComponent,
    
    // Formation
    FormationListComponent,
    FormationFormComponent,
    FormationDetailsComponent,
    
    // Resource
    ResourceListComponent,
    ResourceFormComponent,
    ResourceDetailsComponent,
    
    // University
    UniversityListComponent,
    UniversityFormComponent,
    UniversityDetailsComponent,

    
    // evaluation Service
    EvaluationDetailsComponent,
    EvaluationFormComponent,
    EvaluationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
