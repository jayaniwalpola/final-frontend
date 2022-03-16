import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { CompanyRegister } from 'src/app/company-register';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent implements OnInit {

  isLogin = false;
  public redirectUrl :string | undefined;

  company = new CompanyRegister();
  apiUrl = environment.backend_url;
  id: any;
  item:any;

constructor(private dataService: DataService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  loginCompany(){
    const fd = new FormData();
    fd.append('password',this.company.password);
    fd.append('email',this.company.email);

    console.log(this.company.password);
    console.log(this.company.email);

    this.http.post(this.apiUrl+'/CompanyLogin',fd,{
      reportProgress:true,
      observe:'events'
    }).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:

          break;
        case HttpEventType.Response:
          console.log(event);
          // console.log(event.body.user.id);

          if(event.status == 200)
          {
            this.router.navigate(['companydashboard/']);
          }


          localStorage.setItem('id', event.body.user.id);
          localStorage.setItem('company_name', event.body.user.company_name);
          localStorage.setItem('profile_image', event.body.user.profile_image);
          this.item = localStorage.getItem('id');
          localStorage.getItem('company_name');
          localStorage.getItem('profile_image');

          console.log(this.item);


      }


  });
}

}
