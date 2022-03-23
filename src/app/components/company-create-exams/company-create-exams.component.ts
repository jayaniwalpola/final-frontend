import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-create-exams',
  templateUrl: './company-create-exams.component.html',
  styleUrls: ['./company-create-exams.component.css']
})
export class CompanyCreateExamsComponent implements OnInit {

  vacancies: any;
  data: any;
  item:any;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.item =localStorage.getItem('id');
    // console.log(this.item);
    this.getVac();

  }
  getVac()
  {
    this.dataService.vacancyGetByComID(this.item,this.data).subscribe(res=>{
      this.vacancies=res;
      // console.log(res);
    });
  }

}
