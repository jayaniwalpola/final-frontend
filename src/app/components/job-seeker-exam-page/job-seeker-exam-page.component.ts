import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { Exam } from 'src/app/exam';
import { UserAns } from 'src/app/user-ans';

@Component({
  selector: 'app-job-seeker-exam-page',
  templateUrl: './job-seeker-exam-page.component.html',
  styleUrls: ['./job-seeker-exam-page.component.css']
})
export class JobSeekerExamPageComponent implements OnInit {

  id: any;
  ansid: any;
  level: any;
  ans1: any;
  data: any;
  apiUrl = environment.backend_url;
  exam = new Exam();
  userAns = new UserAns();
  buttonEnable :any;



  constructor(private route:ActivatedRoute,private dataService: DataService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.level =sessionStorage.getItem('Job_Category_Level');
    this.ansid =sessionStorage.getItem('ansId');
//  console.warn(this.level);
    this.getDataExam();
    // console.log(this.route.snapshot.params.id);
  }

  getDataExam(){
    const fd = new FormData();
    fd.append('joblevel',this.level);

    console.log(this.level);

    this.http.post(this.apiUrl+'/displayExam/'+this.id,fd,{
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
        // console.log(event);
        this.data = event.body;
        // console.log(this.data);
        this.exam = this.data;
        console.log(this.data.id);
        sessionStorage.setItem('ansId', this.data.id);

      }
    })

  }
  checkAns(){

    const fd = new FormData();

    fd.append('UA1',this.userAns.UA1);
    fd.append('UA2',this.userAns.UA2);
    fd.append('UA3',this.userAns.UA3);
    fd.append('UA4',this.userAns.UA4);
    fd.append('UA5',this.userAns.UA5);
    fd.append('UA6',this.userAns.UA6);
    fd.append('UA7',this.userAns.UA7);
    fd.append('UA8',this.userAns.UA8);
    fd.append('UA9',this.userAns.UA9);
    fd.append('UA10',this.userAns.UA10);


    console.log(this.userAns.UA1);
    console.log(this.userAns.UA2);
    console.log(this.userAns.UA3);
    console.log(this.userAns.UA4);
    console.log(this.userAns.UA5);
    console.log(this.userAns.UA6);
    console.log(this.userAns.UA7);
    console.log(this.userAns.UA8);
    console.log(this.userAns.UA9);
    console.log(this.userAns.UA10);

    this.http.post(this.apiUrl+'/ansCheck/'+this.ansid,fd,{
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
          console.log(event.body.message);

          sessionStorage.setItem('message', event.body.message);

          this.router.navigate(['jobseekerVacancyApply/'+this.id ]);
        }

      }
    })



  }

}
