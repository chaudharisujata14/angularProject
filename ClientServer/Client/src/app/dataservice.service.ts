import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  select() {
    return this.http.get('http://localhost:9998/emps');
  }

  selectByNo(No) {
   return this.http.get('http://localhost:9998/emps/' + No);
  }

  insert(emp) {
    return this.http.post('http://localhost:9998/emps', emp);
  }

  update(emp) {
    return this.http.put('http://localhost:9998/emps/' + emp.No, emp);
  }

  delete(No) {
    return this.http.delete('http://localhost:9998/emps/' + No);
  }
}
