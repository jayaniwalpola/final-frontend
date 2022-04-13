import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyRegister } from 'src/app/company-register';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-jobseeker-company',
  templateUrl: './jobseeker-company.component.html',
  styleUrls: ['./jobseeker-company.component.css']
})
export class JobseekerCompanyComponent implements OnInit {

  id: any;
  data:any;
  company = new CompanyRegister();
  companyChannels:any;
  companies:any;

  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params.id;
    this.getchan();
    this.getCom()
  }
  getchan(){
    this.dataService.vacancyChannelCompanyById(this.id,this.data).subscribe(res =>{
      // console.log(res);
      this.companyChannels = res;
    });
  }

  getCom(){
    this.dataService.comGet(this.id,this.data).subscribe(res =>{
      // console.log(res);
      this.data =res;
      this.company =this.data ;
      // this.getVacancy();
    })
  }
  subscribe(){

    console.log("subscribe jayai");
  }

}
