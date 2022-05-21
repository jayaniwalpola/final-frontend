import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { CompanyRegister } from 'src/app/company-register';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

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
  submitted = false;


  registerForm: FormGroup;
  error = {
    hidden : true,
    message : ''
  }


constructor(
  private fb: FormBuilder,
  private dataService: DataService,
  private http:HttpClient,
  private router:Router
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


  loginCompany(){

    this.submitted = true;
    // console.table(this.registerForm.value);
  //  console.table(this.jobseeker);
    if (this.registerForm.valid) {
    //  alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value['email']);
      const fd = new FormData();

      fd.append('password',this.registerForm.value['password']);
      fd.append('email',this.registerForm.value['email']);

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
            if(event.status == 200)
            {
              this.router.navigate(['companydashboard/']);
            }else{
              console.log("error")
            }

          sessionStorage.setItem('id', event.body.user.id);
          sessionStorage.setItem('company_name', event.body.user.company_name);
          sessionStorage.setItem('profile_image', event.body.user.profile_image);
        }



    }, (error)=> {
      console.log(error.error.error)
      this.error.hidden = false
      this.error.message =error.error.error
      console.log(this.error)
    });
    }

  }

//   loginCompany(){
//     const fd = new FormData();
//     fd.append('password',this.company.password);
//     fd.append('email',this.company.email);

//     console.log(this.company.password);
//     console.log(this.company.email);

//     this.http.post(this.apiUrl+'/CompanyLogin',fd,{
//       reportProgress:true,
//       observe:'events'
//     }).subscribe((event: HttpEvent<any>) => {
//       switch (event.type) {
//         case HttpEventType.Sent:
//           console.log('Request has been made!');
//           break;
//         case HttpEventType.ResponseHeader:
//           console.log('Response header has been received!');
//           break;
//         case HttpEventType.UploadProgress:

//           break;
//         case HttpEventType.Response:
//           console.log(event);
//           // console.log(event.body.user.id);

//           if(event.status == 200)
//           {
//             this.router.navigate(['companydashboard/']);
//           }

//           sessionStorage.setItem('id', event.body.user.id);
//           sessionStorage.setItem('company_name', event.body.user.company_name);
//           sessionStorage.setItem('profile_image', event.body.user.profile_image);

//       }



//   });
// }

}
