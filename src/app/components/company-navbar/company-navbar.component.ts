import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyRegister } from 'src/app/company-register';
import { JobSeeker } from 'src/app/job-seeker';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrls: ['./company-navbar.component.css']
})
export class CompanyNavbarComponent implements OnInit {

  // let item = JSON.parse(localStorage.getItem('id'));
  item:any;
  id: any;
  comName: any;
  jobName: any;
  data:any;
  company = new CompanyRegister();
  jobSeeker = new JobSeeker();
  isLoggedIn = false;
  isJobLoggedIn = false;

  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.item =sessionStorage.getItem('id');
    this.comName =sessionStorage.getItem('company_name');
    this.jobName =sessionStorage.getItem('user_name');
    // console.log(localStorage.getItem('id'));
    this.getNav();

  }
  getNav(){
    if(sessionStorage.getItem("company_name") !== null)
    {
      this.dataService.comGetById(this.item,this.data).subscribe(res =>{
        // console.log(res);
        this.data =res;
        this.company =this.data ;
        this.isLoggedIn = true;
        // this.isComLoggedIn = true;
      });
    }
    if(sessionStorage.getItem("user_name") !== null){

      this.dataService.jobGetById(this.item,this.data).subscribe(res =>{
        // console.log(res);
        this.data =res;
        this.jobSeeker =this.data ;
        this.isLoggedIn = true;
        // this.isComLoggedIn = true;
      });

      this.isLoggedIn = true;
      this.isJobLoggedIn = true;

    }



  }
  logOut() {

    sessionStorage.removeItem('id');
    sessionStorage.removeItem('user_name');
    sessionStorage.removeItem('profile_image');
    sessionStorage.clear()
    this.router.navigate(['']);


  }



}
