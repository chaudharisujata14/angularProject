import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
emp = {No : '', Name : '' , Age : ''};
  constructor(private service: DataserviceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
      const No = result.get('No');
      const selectbyNoResult = this.service.selectByNo(No);
      selectbyNoResult.subscribe((data) => {
      this.emp = data[0];
      });
      });
  }

  onUpdate(myForm) {
  this.emp = myForm.form.value;
  const observableResult = this.service.update(this.emp);
  observableResult.subscribe((updatedResult) => {
  console.log(updatedResult);
  this.router.navigate(['/home']);
  });
}
}
