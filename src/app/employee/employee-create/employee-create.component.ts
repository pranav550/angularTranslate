import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  Id: any;
  private employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService) {


  }

  ngOnInit() {

  }

}
