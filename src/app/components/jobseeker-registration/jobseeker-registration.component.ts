import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { Router, RouterModule,Routes } from '@angular/router';
import { JobSeeker } from 'src/app/job-seeker';

@Component({
  selector: 'app-jobseeker-registration',
  templateUrl: './jobseeker-registration.component.html',
  styleUrls: ['./jobseeker-registration.component.css']
})
export class JobseekerRegistrationComponent implements OnInit {

  jobseeker = new JobSeeker();
  file_errors:any;
  selectedFile: File = null as any;
  selectedFileName = "Choose File";
  disable_file_uplaod_button:any = false;
  update_res :any=[]; // store upalod response
  progress:any; //
  ProgressBar :any;
  upalod_status_message:any =[];

  apiUrl = environment.backend_url;



  constructor(private dataService: DataService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
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
    const fd = new FormData();
    fd.append('user_name',this.jobseeker.user_name);
    fd.append('profile_image',this.selectedFile,this.selectedFile.name);
    fd.append('address',this.jobseeker.address);
    fd.append('password',this.jobseeker.password);
    fd.append('email',this.jobseeker.email);
    fd.append('confirm_password',this.jobseeker.confirm_password);
    fd.append('contact_no',this.jobseeker.contact_no);

    // this.dataService.registerData(this.company).subscribe(res=>{
    //   console.log(res);
    // })
    this.http.post(this.apiUrl+'/UserRegister',fd,{
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

    });
    this.router.navigateByUrl("jobseekerLogin");
  }





}
