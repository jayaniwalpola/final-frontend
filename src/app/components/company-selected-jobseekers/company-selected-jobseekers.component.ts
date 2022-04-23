import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailDetails } from 'src/app/email-details';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-company-selected-jobseekers',
  templateUrl: './company-selected-jobseekers.component.html',
  styleUrls: ['./company-selected-jobseekers.component.css']
})
export class CompanySelectedJobseekersComponent implements OnInit {

  item:any;
  apiUrl = environment.backend_url;
  details:any;
  detailsEmail = new EmailDetails();
  emailSuccess: boolean = false;




  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  this.item = sessionStorage.getItem('id');
  this.getDetails();

  }
  getDetails(){
    // console.log("exam");

    const fd = new FormData();
    fd.append('Cid',this.item);

    console.log(this.item);
    this.http.post(this.apiUrl+'/getSelectedJobSeekers',fd,{
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
        console.log(event.body);
        this.details = event.body;
      }
    })
  }

  sendEmail(value:any){
    const fd = new FormData();
    fd.append('link',this.detailsEmail.link);
    fd.append('email',value);

    console.log(value);
    console.log(this.detailsEmail.link);

    this.http.post(this.apiUrl+'/sendEmail',fd,{
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
        console.log(event.body.response);
        if(event.body.response == 200)
        {
          // console.log("sent");
          this.emailSuccess=true;


        }
      }
    })



  }

}
