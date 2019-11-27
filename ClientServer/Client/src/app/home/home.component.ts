import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emps: any;
  constructor(private service: DataserviceService,
              private router: Router) {
   }
  ngOnInit() {
const observableResult =  this.service.select();
observableResult.subscribe((result) => {
console.log(result);
this.emps = result;
});

}
onAddRecord() {
this.router.navigate(['/register']);
}
}
