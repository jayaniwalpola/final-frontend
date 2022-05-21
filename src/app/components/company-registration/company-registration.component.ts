import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { CompanyRegister } from 'src/app/company-register';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { Router, RouterModule,Routes } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

  company = new CompanyRegister();
  file_errors:any;
  selectedFile: File = null as any;
  selectedFileName = "Choose File";
  disable_file_uplaod_button:any = false;
  update_res :any=[]; // store upalod response
  progress:any; //
  ProgressBar :any;
  upalod_status_message:any =[];
  submitted = false;

  com_data:any = sessionStorage.getItem('company_name');
  apiUrl = environment.backend_url;
  error = {
    hidden : true,
    message : ''
  };
  comname_error = {
    hidden : true,
    message : ''
  };
  address_error = {
    hidden : true,
    message : ''
  };
  email_error = {
    hidden : true,
    message : ''
  };
  contact_error = {
    hidden : true,
    message : ''
  };
  password_error = {
    hidden : true,
    message : ''
  };
  confirmpwd_error = {
    hidden : true,
    message : ''
  };
  registerForm: FormGroup;



  constructor(
    private dataService: DataService,
    private http:HttpClient,
    private router:Router,
    private fb: FormBuilder
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




  onfileSelected(event:any){
    this.file_errors ="";
    this.selectedFile = event.target.files[0];
    this.selectedFileName =this.selectedFile.name;
    let fileSize = 0;
    let ext = null ;
    fileSize = (Math.round( this.selectedFile.size * 100 / (1024 * 1024)) / 100);
    if(fileSize>6){
      this.disable_file_uplaod_button = false;
      this.file_errors ="Please enter a valid document. Maximum file sizes is 5MB)";
    }else{
      ext=this.selectedFile.name.split('?')[0].split('.').pop();
      if(ext=='pdf'|| ext=='PDF' || ext=='JPG' || ext=='jpg' || ext=='png' || ext=='PNG'|| ext=='JPEG' || ext=='jpeg'){
        this.disable_file_uplaod_button = true;
      }else{
        this.disable_file_uplaod_button = false;
        this.file_errors ="Please select a valid document. Maximum file sizes is 5MB.";
      }
    }
  }

  registerData(){

    console.log(this.company)
    if(this.company.company_name == null || this.company.company_name == '')
    {
      this.comname_error.hidden = false
      this.comname_error.message ="Company Name cannot be null"
    }
    if(this.company.contact_no == null || this.company.contact_no == '')
    {
      this.contact_error.hidden = false
      this.contact_error.message ="Contact number cannot be null"
    }
    if(this.company.address == null || this.company.address == '')
    {
      this.address_error.hidden = false
      this.address_error.message ="Address cannot be null"
    }
    else if(this.company.email == null || this.company.email == '')
    {
      this.email_error.hidden = false
      this.email_error.message ="Email  cannot be null"
    }
    else if(this.company.password == null || this.company.password == '')
    {
      this.password_error.hidden = false
      this.password_error.message ="password  cannot be null"
    }
    else if(this.company.confirm_password == null || this.company.confirm_password == '')
    {
      this.confirmpwd_error.hidden = false
      this.confirmpwd_error.message ="Confirm Password cannot be null"
    }
    else if(this.company.confirm_password != this.company.password )
    {
      this.error.hidden = false
      this.error.message ="Passwords are not match"
    }
    else{
      this.error.hidden = true
      const fd = new FormData();
      fd.append('company_name',this.company.company_name);
        fd.append('profile_image',this.selectedFile,this.selectedFile.name);
        fd.append('address',this.company.address);
        fd.append('description',this.company.description);
        fd.append('password',this.company.password);
        fd.append('email',this.company.email);
        fd.append('confirm_password',this.company.confirm_password);
        fd.append('contact_no',this.company.contact_no);

    this.http.post(this.apiUrl+'/CompanyRegister',fd,{
      reportProgress:true,
      observe:'events'
    }).subscribe(event =>{
      this.update_res = event;
      //console.logthis.update_profile_res = events;
      if(event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(this.update_res.loaded /  this.update_res.total*100);
        this.ProgressBar = this.progress+"%";
        console.log(this.ProgressBar);
      }
      else if(this.update_res.type === HttpEventType.Response){
        this.upalod_status_message=this.update_res.body ;
        console.log(this.upalod_status_message);
        if(this.upalod_status_message.status=="1"){
          this.progress = 0;
          // this.file_upload_form.reset();
          this.selectedFileName = "Choose File";
          // this.modalService.dismissAll();
          // this.SuccessMessage(this.upalod_status_message.message);
          //location.reload();

        }else{
          this.progress = 0;
          // this.registerCompany.reset();
          this.selectedFileName = "Choose File";
          // this.ErrorMessage(this.upalod_status_message.message);
         // location.reload();
        }

      }
    this.router.navigateByUrl("companylogin");


    }, (error)=> {
      this.error.hidden = false
      this.error.message =error.error.error
    });

    }

  }
  // registerData(){
  //   const fd = new FormData();
  //   fd.append('company_name',this.company.company_name);
  //   fd.append('profile_image',this.selectedFile,this.selectedFile.name);
  //   fd.append('address',this.company.address);
  //   fd.append('description',this.company.description);
  //   fd.append('password',this.company.password);
  //   fd.append('email',this.company.email);
  //   fd.append('confirm_password',this.company.confirm_password);
  //   fd.append('contact_no',this.company.contact_no);

  //   // this.dataService.registerData(this.company).subscribe(res=>{
  //   //   console.log(res);
  //   // })
  //   this.http.post(this.apiUrl+'/CompanyRegister',fd,{
  //     reportProgress:true,
  //     observe:'events'
  //   }).subscribe(event =>{
  //     this.update_res = event;
  //     //console.logthis.update_profile_res = events;
  //     if(event.type === HttpEventType.UploadProgress){
  //       this.progress = Math.round(this.update_res.loaded /  this.update_res.total*100);
  //       this.ProgressBar = this.progress+"%";
  //       console.log(this.ProgressBar);
  //     }
  //     else if(this.update_res.type === HttpEventType.Response){
  //       this.upalod_status_message=this.update_res.body ;
  //       console.log(this.upalod_status_message);
  //       if(this.upalod_status_message.status=="1"){
  //         this.progress = 0;
  //         // this.file_upload_form.reset();
  //         this.selectedFileName = "Choose File";
  //         // this.modalService.dismissAll();
  //         // this.SuccessMessage(this.upalod_status_message.message);
  //         //location.reload();

  //       }else{
  //         this.progress = 0;
  //         // this.registerCompany.reset();
  //         this.selectedFileName = "Choose File";
  //         // this.ErrorMessage(this.upalod_status_message.message);
  //        // location.reload();
  //       }

  //     }
  //     // console.log(event.status);


  //   });
  //   this.router.navigateByUrl("companylogin");
  // }

}
