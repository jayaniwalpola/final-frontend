import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';

@Component({
  selector: 'app-vacancy-update',
  templateUrl: './vacancy-update.component.html',
  styleUrls: ['./vacancy-update.component.css']
})
export class VacancyUpdateComponent implements OnInit {

  id: any;
  data: any;
  vacancy = new Vacancy();

  constructor(private route:ActivatedRoute,private dataService: DataService) { }

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
    this.dataService.vacancyEdit(this.id,this.vacancy).subscribe(res =>{
      
    })
  }
}
