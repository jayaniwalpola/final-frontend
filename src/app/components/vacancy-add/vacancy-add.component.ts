import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';

@Component({
  selector: 'app-vacancy-add',
  templateUrl: './vacancy-add.component.html',
  styleUrls: ['./vacancy-add.component.css']
})
export class VacancyAddComponent implements OnInit {

  id: any;
  vacancy = new Vacancy();

  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id  = this.route.snapshot.params.id;
  }
  addVacancy(id:any){
    // console.log(this.vacancy);
    this.dataService.vacancyAdd(id,this.vacancy).subscribe(res=>{
      console.log(res);
    });
    // this.router.navigateByUrl('channelVacancy/'+id);
    this.router.navigate(['channelVacancy/'+id]);


  }


}
