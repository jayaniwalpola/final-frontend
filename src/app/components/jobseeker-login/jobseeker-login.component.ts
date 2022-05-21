import { Component, OnInit } from '@angular/core';
import { JobSeeker } from 'src/app/job-seeker';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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
  submitted = false;
  jobseeker = new JobSeeker();
  apiUrl = environment.backend_url;
  registerForm: FormGroup;
  error = {
    hidden : true,
    message : ''
  }


  constructor(
    private dataService: DataService,
    private http:HttpClient,
    private router:Router,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, ])],      
      },
      
    );
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }

  loginUser(){

    this.submitted = true;
    // console.table(this.registerForm.value);
  //  console.table(this.jobseeker);
    if (this.registerForm.valid) {
    //  alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value['email']);
      const fd = new FormData();

      fd.append('password',this.registerForm.value['password']);
      fd.append('email',this.registerForm.value['email']);
  
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
            }else{
              console.log("error")
            }
  
            sessionStorage.setItem('id', event.body.user.id);
            sessionStorage.setItem('user_name', event.body.user.user_name);
            sessionStorage.setItem('profile_image', event.body.user.profile_image);
            // localStorage.getItem('profile_image');
        }
        
  
  
    }, (error)=> {
      console.log(error.error.error)
      this.error.hidden = false
      this.error.message =error.error.error
      console.log(this.error)
    });
    }
  
  }

}
