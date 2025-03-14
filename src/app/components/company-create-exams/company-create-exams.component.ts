import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/exam';
import { DataService } from 'src/app/service/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/answer';



@Component({
  selector: 'app-company-create-exams',
  templateUrl: './company-create-exams.component.html',
  styleUrls: ['./company-create-exams.component.css']
})
export class CompanyCreateExamsComponent implements OnInit {



  mySelect = '2';
  mySelect2 = '2';
  selectedValue: any;
  selectedValue2: any;

  level = [
    {
      id: 1,
      name: 'Internship Level',

    },
    {
      id: 2,
      name: 'Associate Level',

    },
    {
      id: 3,
      name: 'Junior Level',

    },
    {
      id: 4,
      name: 'Senior Level',

    },
  ];

  vacancies: any;
  data: any;
  item:any;
  exam = new Exam();
  ans = new Answer();
  selected: any;
  examform = new FormGroup({});
  apiUrl = environment.backend_url;




  constructor(private dataService: DataService,private http:HttpClient,private router:Router,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.item =sessionStorage.getItem('id');
    // console.log(this.item);
    this.getVac();
    this.addAns();

  }
  selectChange2() {
    this.selectedValue2 = this.dataService.getDropDownText(this.mySelect2, this.level)[0].name;
}
  selectChange() {
    this.selectedValue = this.dataService.getDropDownText(this.mySelect, this.vacancies)[0].id
  }

  getVac()
  {
    this.dataService.vacancyGetByComID(this.item,this.data).subscribe(res=>{
      this.vacancies=res;
      // console.log(res);
    });
  }
  addExam(){
    const fd = new FormData();
    fd.append('related_vac',this.selectedValue);
    fd.append('level',this.selectedValue2);
    fd.append('Q1',this.exam.Q1);
    fd.append('Q2',this.exam.Q2);
    fd.append('Q3',this.exam.Q3);
    fd.append('Q4',this.exam.Q4);
    fd.append('Q5',this.exam.Q5);
    fd.append('Q6',this.exam.Q6);
    fd.append('Q7',this.exam.Q7);
    fd.append('Q8',this.exam.Q8);
    fd.append('Q9',this.exam.Q9);
    fd.append('Q10',this.exam.Q10);


    console.log(this.selectedValue);
    console.log(this.selectedValue2);
    console.log(this.exam.Q1);
    console.log(this.exam.Q2);
    console.log(this.exam.Q3);
    console.log(this.exam.Q4);
    console.log(this.exam.Q5);
    console.log(this.exam.Q6);
    console.log(this.exam.Q7);
    console.log(this.exam.Q8);
    console.log(this.exam.Q9);
    console.log(this.exam.Q10);


    this.http.post(this.apiUrl+'/examAdd/'+this.item,fd,{
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
            this.router.navigate(['companydashboard']);
          }
      }
    })
  }
  addAns(){

    const fd = new FormData();
    // fd.append('related_vac',this.selectedValue);
    fd.append('A1',this.ans.A1);
    fd.append('A2',this.ans.A2);
    fd.append('A3',this.ans.A3);
    fd.append('A4',this.ans.A4);
    fd.append('A5',this.ans.A5);
    fd.append('A6',this.ans.A6);
    fd.append('A7',this.ans.A7);
    fd.append('A8',this.ans.A8);
    fd.append('A9',this.ans.A9);
    fd.append('A10',this.ans.A10);

    console.log(this.ans.A1);
    console.log(this.ans.A2);
    console.log(this.ans.A3);
    console.log(this.ans.A4);
    console.log(this.ans.A5);
    console.log(this.ans.A6);
    console.log(this.ans.A7);
    console.log(this.ans.A8);
    console.log(this.ans.A9);
    console.log(this.ans.A10);

    this.http.post(this.apiUrl+'/ansAdd/'+this.selectedValue,fd,{
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
        // console.log(event.body.id);
        if(event.status == 200)
          {
            this.router.navigate(['companydashboard']);
          }
      }
    })




  }

}
