import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: DataserviceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
      const No = result.get('No');
      console.log(No);
      const observableResult = this.service.delete(No);
      observableResult.subscribe((deleteResult) => {
      console.log(deleteResult);
      this.router.navigate(['/home']);
      });
    });
  }

}
