import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeCreateComponent },
  { path: 'employee/:Id', component: EmployeeCreateComponent },
  { path: 'employeelist', component: EmployeeListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
