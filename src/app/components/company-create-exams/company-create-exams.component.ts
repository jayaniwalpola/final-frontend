import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/exam';
import { DataService } from 'src/app/service/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-create-exams',
  templateUrl: './company-create-exams.component.html',
  styleUrls: ['./company-create-exams.component.css']
})
export class CompanyCreateExamsComponent implements OnInit {

  vacancies: any;
  data: any;
  item:any;
  exam = new Exam();
  selected: any;
  examform = new FormGroup({});



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.item =sessionStorage.getItem('id');
    // console.log(this.item);
    this.getVac();
    // this.selected=1;

  }
  getVac()
  {
    this.dataService.vacancyGetByComID(this.item,this.data).subscribe(res=>{
      this.vacancies=res;
      // console.log(res);
    });
  }
  addExam(){
    console.log(this.exam);
  }

}
