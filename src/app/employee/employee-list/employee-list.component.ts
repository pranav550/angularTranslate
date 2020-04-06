import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  private employeeList: Array<Employee> = [];
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.employeeService.getUsers()
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(element => {
          const employee = new Employee();
          employee.Id = element.Id;
          employee.Name = element.Name;
          employee.Email = element.Email;
          employee.PhoneNo = element.PhoneNo;
          this.employeeList.push(employee);

        });
      }, (err: HttpErrorResponse) => {
        console.log(err);
      })
  }
  delete(Id: number) {
    this.employeeService.delete(Id)
      .subscribe((data: any) => {
        alert('Deleted record success');
        this.employeeList=this.employeeList.filter(function(value,index){
          return value.Id!=Id;
        });
      }, (err: HttpErrorResponse) => {
        console.log(err);
      })
  }
}
