import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentListComponent } from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
      { path: '', redirectTo: '/departments', pathMatch: 'full'},           
      { path: 'departments', component: DepartmentListComponent },
      { path: 'employees', component: EmployeeListComponent},
      { path: 'departments/:id', component: DepartmentDetailComponent},
      { path: '**', component: PageNotFoundComponent}
      
    ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const routingComponents = [HomeComponent, PageNotFoundComponent, DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent];