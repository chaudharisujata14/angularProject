import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emp = {No: '', Name: '', Age: ''};
  msg = '';
  constructor(private service: DataserviceService, private router: Router) { }
  ngOnInit() {
  }

  onRegister(myform) {
   console.log(myform.form.value);
   this.emp = myform.form.value;
   const observableResult = this.service.insert(this.emp);
   observableResult.subscribe((result) => {
   console.log(result);
   this.msg = 'Record is Inserted...';
   });
  }
  goToHome() {
      this.router.navigate(['/home']);
  }
}
