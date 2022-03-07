import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';

@Component({
  selector: 'app-channel-vacancy',
  templateUrl: './channel-vacancy.component.html',
  styleUrls: ['./channel-vacancy.component.css']
})
export class ChannelVacancyComponent implements OnInit {

  id: any;
  data: any;
  vacancy= new Vacancy();
  vacancies: any;



  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id  = this.route.snapshot.params.id;
    this.getVacancy();
  }
  getVacancy(){
    this.dataService.vacancyGet(this.id,this.data).subscribe(res =>{
      // console.log(res);
      this.vacancies = res;
      // this.getVacancy();
    })
  }
  deleteVacancy(id:any){
    // console.log(id);
    this.dataService.vacancyDelete(id).subscribe(res=>{
      this.getVacancy();
    })
  }

}
