import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/app/channel';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-jobseeker-vacancy-dashboard',
  templateUrl: './jobseeker-vacancy-dashboard.component.html',
  styleUrls: ['./jobseeker-vacancy-dashboard.component.css']
})
export class JobseekerVacancyDashboardComponent implements OnInit {

  id: any;
  data: any;
  vacancy= new Vacancy();
  channel = new Channel();
  vacancies: any;
  view:boolean =false;
  search: boolean = false;
  error: boolean = false;
  searchResults:any;
  errorMsg:any;
  apiUrl = environment.backend_url;


  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params.id;
    this.getVacancy();
    this.getChan();
  }
  getVacancy(){
    this.dataService.vacancyGet(this.id,this.data).subscribe(res =>{
      this.view = true;
      this.error =false;
      this.vacancies = res;
      // this.getVacancy();
    })
  }
  getChan(){
    this.dataService.channelGetDataById(this.id,this.data).subscribe(res =>{//see the comGet method
      // console.log(res);
      this.data =res;
      this.channel =this.data ;
      // this.getVacancy();
    })
  }
  searchValue(value:any){

    this.search =true;
    this.view = false;
    this.error =false;


    const fd = new FormData();

    fd.append('search',value);
    console.log(value);

    this.http.post(this.apiUrl+'/searchVacancy/'+this.id,fd,{
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
          // console.log(event.body.msg);
          console.log(event.body.response);
          if(event.body.response == "false")
          {
            this.search = false;
            this.view = false;
            this.error = true;
            this.errorMsg = event.body.msg;
          }
          this.searchResults = event.body;

      }


  });
  }

}
