import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Vacancy } from 'src/app/vacancy';

@Component({
  selector: 'app-jobseeker-vacancy-apply',
  templateUrl: './jobseeker-vacancy-apply.component.html',
  styleUrls: ['./jobseeker-vacancy-apply.component.css']
})
export class JobseekerVacancyApplyComponent implements OnInit {

  id: any;
  data: any;
  vacancy = new Vacancy();

  constructor(private route:ActivatedRoute,private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    // console.log(this.route.snapshot.params.id);

  }
  getData(){
    this.dataService.vacancyGetById(this.id).subscribe(res => {
      // console.log(res);
      this.data = res;
      this.vacancy = this.data;
    })
  }


}
