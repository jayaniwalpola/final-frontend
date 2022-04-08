import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { JobApplier } from 'src/app/job-applier';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-jobseeker-vacancy-apply',
  templateUrl: './jobseeker-vacancy-apply.component.html',
  styleUrls: ['./jobseeker-vacancy-apply.component.css']
})
export class JobseekerVacancyApplyComponent implements OnInit {

  id: any;
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
  buttonEnable =false;

  constructor(private route:ActivatedRoute,private dataService: DataService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    // console.log(this.route.snapshot.params.id);
    this.msg = sessionStorage.getItem('message');

        // if(this.msg == "Pass")
        //   {
        //     console.log("jey");
        //     // this.buttonEnable = true;
        //   }
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



}
