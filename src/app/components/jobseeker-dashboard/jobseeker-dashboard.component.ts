import { Component, OnInit } from '@angular/core';
import { CompanyRegister } from 'src/app/company-register';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-jobseeker-dashboard',
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrls: ['./jobseeker-dashboard.component.css']
})
export class JobseekerDashboardComponent implements OnInit {

  companies: any;
  data: any;
  company = new CompanyRegister();


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.dataService.companyGet(this.data).subscribe(res=>{
      this.companies=res;
    });
  }

}
