import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/app/channel';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';

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

  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params.id;
    this.getVacancy();
    this.getChan();
  }
  getVacancy(){
    this.dataService.vacancyGet(this.id,this.data).subscribe(res =>{
      // console.log(res);
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

}
