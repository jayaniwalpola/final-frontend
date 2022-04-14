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
  view:boolean =false;
  search: boolean = false;
  company = new CompanyRegister();
  All:boolean=false;
  searchResults:any;




  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.dataService.companyGet(this.data).subscribe(res=>{
      console.log(res);
      // this.All = true;
      this.view=true;
      this.companies=res;
    });
  }
  searchValue(value:any){
    console.log(value)

    if(value==""){
      this.getCompany();
      this.search = false;
    }else{
      this.dataService.searchValue(value).subscribe(res =>{
        console.log(res);
        this.search=true;
        this.view=false;
        this.searchResults = res;

      })
    }



  }

}
