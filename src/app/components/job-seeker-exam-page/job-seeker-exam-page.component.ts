import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { Exam } from 'src/app/exam';

@Component({
  selector: 'app-job-seeker-exam-page',
  templateUrl: './job-seeker-exam-page.component.html',
  styleUrls: ['./job-seeker-exam-page.component.css']
})
export class JobSeekerExamPageComponent implements OnInit {

  id: any;
  level: any;
  data: any;
  apiUrl = environment.backend_url;
  exam = new Exam();



  constructor(private route:ActivatedRoute,private dataService: DataService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.level =sessionStorage.getItem('Job_Category_Level');

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
        console.log(this.exam);
      }
    })

  }

}
