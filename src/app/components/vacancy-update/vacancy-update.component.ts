import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';

@Component({
  selector: 'app-vacancy-update',
  templateUrl: './vacancy-update.component.html',
  styleUrls: ['./vacancy-update.component.css']
})
export class VacancyUpdateComponent implements OnInit {

  id: any;
  data: any;
  vacancy = new Vacancy();
  apiUrl = environment.backend_url;


  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router,private _location: Location) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }
  getData(){
    this.dataService.vacancyGetById(this.id).subscribe(res => {
      // console.log(res);
      this.data = res;
      this.vacancy = this.data;
    })
  }
  updateVacancy(){
    const fd = new FormData();
    fd.append('vacancy_name',this.vacancy.vacancy_name);
    fd.append('vacancy_des',this.vacancy.vacancy_des);
    fd.append('requirement',this.vacancy.requirement);
    fd.append('skills',this.vacancy.skills);
    fd.append('experience',this.vacancy.experience);


    console.log(this.vacancy.vacancy_name);
    console.log(this.vacancy.vacancy_des);
    console.log(this.vacancy.requirement);
    console.log(this.vacancy.skills);
    console.log(this.vacancy.experience);


    this.http.put(this.apiUrl+'/vacancyUpdate/'+this.id,fd,{
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
            this._location.back();
          }
      }
    })

   
  }


}
