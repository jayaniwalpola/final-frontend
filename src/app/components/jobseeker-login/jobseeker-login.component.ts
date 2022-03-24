import { Component, OnInit } from '@angular/core';
import { JobSeeker } from 'src/app/job-seeker';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';

import { CompanyRegister } from 'src/app/company-register';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css']
})
export class JobseekerLoginComponent implements OnInit {


  isLogin = false;
  public redirectUrl :string | undefined;

  jobseeker = new JobSeeker();
  apiUrl = environment.backend_url;


  constructor(private dataService: DataService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){

    const fd = new FormData();

    fd.append('password',this.jobseeker.password);
    fd.append('email',this.jobseeker.email);

    console.log(this.jobseeker.password);
    console.log(this.jobseeker.email);

    this.http.post(this.apiUrl+'/userLogin',fd,{
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
          if(event.status == 200)
          {
            this.router.navigate(['jobseekerDashboard']);
          }

          sessionStorage.setItem('id', event.body.user.id);
          sessionStorage.setItem('user_name', event.body.user.user_name);
          sessionStorage.setItem('profile_image', event.body.user.profile_image);
          // localStorage.getItem('profile_image');
      }


  });
  }

}
