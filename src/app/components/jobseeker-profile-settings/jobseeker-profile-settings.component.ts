
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobSeeker } from 'src/app/job-seeker';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-jobseeker-profile-settings',
  templateUrl: './jobseeker-profile-settings.component.html',
  styleUrls: ['./jobseeker-profile-settings.component.css']
})
export class JobseekerProfileSettingsComponent implements OnInit {

  apiUrl = environment.backend_url;
  item:any;
  data:any;
  img:any;
  jobseekers:any;
  jobseeker = new  JobSeeker();

  file_errors:any;
  selectedFile: File = null as any;
  selectedFileName = "Choose File";
  disable_file_uplaod_button:any = false;
  update_res :any=[]; // store upalod response
  progress:any; //
  ProgressBar :any;
  upalod_status_message:any =[];
  constructor(private route: ActivatedRoute,private http:HttpClient,private router:Router,private dataService: DataService) { }

  ngOnInit(): void {
    this.item =sessionStorage.getItem('id');
    console.log(this.item);
    this.getJobSeeker();
  }
  getJobSeeker(){
    this.dataService.jobGetById(this.item,this.data).subscribe(res => {
      console.log(res);
      this.jobseekers =res;
      this.jobseeker = this.jobseekers;

    })

  }


  onfileSelected(event:any){
    this.file_errors ="";
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];


    this.selectedFileName =this.selectedFile.name;
    console.log(this.selectedFileName);


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
  updateJobseeker(){
    if(this.selectedFile == null){
      const fd = new FormData();
      fd.append('user_name',this.jobseeker.user_name);
      fd.append('address',this.jobseeker.address);
      fd.append('contact_no',this.jobseeker.contact_no);

      this.http.post(this.apiUrl+'/userUpdate/'+this.item,fd,{
        reportProgress:true,
        observe:'events'

      }).subscribe((event:HttpEvent<any>) =>{
        switch (event.type){
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
        }
      })



    }else{
      const fd = new FormData();
      fd.append('user_name',this.jobseeker.user_name);
      fd.append('address',this.jobseeker.address);
      fd.append('contact_no',this.jobseeker.contact_no);

    fd.append('profile_image',this.selectedFile,this.selectedFile.name);


    this.http.post(this.apiUrl+'/userUpdate/'+this.item,fd,{
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
      console.log(this.upalod_status_message.response);
      if(this.upalod_status_message.response == 200)
      {
        this.router.navigate(['jobseekerDashboard']);

      }
      }
    });

    }






  }



}
