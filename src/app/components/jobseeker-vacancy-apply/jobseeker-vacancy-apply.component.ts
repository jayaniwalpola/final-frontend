import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { JobApplier } from 'src/app/job-applier';
import { environment } from 'src/environments/environment';
import { Applicaion } from 'src/app/applicaion';


@Component({
  selector: 'app-jobseeker-vacancy-apply',
  templateUrl: './jobseeker-vacancy-apply.component.html',
  styleUrls: ['./jobseeker-vacancy-apply.component.css']
})
export class JobseekerVacancyApplyComponent implements OnInit {

  id: any;
  jId:any
  data: any;
  vacancy = new Vacancy();
  jobApplier = new JobApplier();
  apiUrl = environment.backend_url;

  level = [
    {
      id: 1,
      name: 'Internship Level',

    },
    {
      id: 2,
      name: 'Associate Level',

    },
    {
      id: 3,
      name: 'Junior Level',

    },
    {
      id: 4,
      name: 'Senior Level',

    },
  ];

  mySelect = '2';
  selectedValue: any;
  msg:any;
  success =false;
  buttonEnable =false;
  application = new Applicaion();

  file_errors:any;
  selectedFile: File = null as any;
  selectedFileName = "Choose File";
  disable_file_uplaod_button:any = false;
  update_res :any=[]; // store upalod response
  progress:any; //
  ProgressBar :any;
  successmgs:any;
  upalod_status_message:any =[];


  constructor(private route:ActivatedRoute,private dataService: DataService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();

      this.jId = sessionStorage.getItem('id');

      this.msg = sessionStorage.getItem('message');
        if(this.msg == "Pass")
          {
            // console.log("jey");
            this.buttonEnable = true;
          }
  }
  selectChange() {
    this.selectedValue = this.dataService.getDropDownText(this.mySelect, this.level)[0].name;
  }


  getData(){
    this.dataService.vacancyGetById(this.id).subscribe(res => {
      // console.log(res);
      this.data = res;
      this.vacancy = this.data;
    })
  }
  addExam(){
    const fd = new FormData();

    fd.append('Name',this.jobApplier.Name);
    fd.append('Job_Category_Level',this.selectedValue);
    fd.append('Phone_no',this.jobApplier.Phone_no);

    console.log(this.jobApplier.Name);
    console.log(this.selectedValue);
    console.log(this.jobApplier.Phone_no);


    this.http.post(this.apiUrl+'/jobApplierAdd/'+this.id,fd,{
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
            this.router.navigate(['/examPage/'+this.id]);
          }
          sessionStorage.setItem('Job_Category_Level', event.body.Job_Category_Level);

      }

    })

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
  uploadCV(){
    console.log("hi");

    const fd = new FormData();

    fd.append('cvs',this.selectedFile,this.selectedFile.name);


    this.http.post(this.apiUrl+'/cvUpload/'+this.jId,fd,{
      reportProgress:true,
      observe:'events'
    }).subscribe(event =>{
      // console.log(event);

      this.update_res = event;
      //console.logthis.update_profile_res = events;

      if(event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(this.update_res.loaded /  this.update_res.total*100);
        this.ProgressBar = this.progress+"%";
        console.log(this.ProgressBar);
      }
      else if(this.update_res.type === HttpEventType.Response){
        this.upalod_status_message=this.update_res.body ;
        console.log(this.upalod_status_message.status);

        if(this.upalod_status_message.status=="1"){
          this.progress = 0;
          // this.file_upload_form.reset();
          this.selectedFileName = "Choose File";
          // this.modalService.dismissAll();
          // this.SuccessMessage(this.upalod_status_message.message);
          //location.reload();
          this.success =true;

          this.successmgs = this.upalod_status_message.message;


        }else{
          this.progress = 0;
          // this.registerCompany.reset();
          this.selectedFileName = "Choose File";
          // this.ErrorMessage(this.upalod_status_message.message);
         // location.reload();
        }
      }


    });

  }



}
