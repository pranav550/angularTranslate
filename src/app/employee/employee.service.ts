import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('https://localhost:4204/api/Users');
  }
  delete(Id: number) {
    return this.http.delete('https://localhost:4204/api/Users/' + Id);
  }
  addUsers(employee:Employee) {
    return this.http.post('https://localhost:4204/api/Users/',employee);
  }
}
