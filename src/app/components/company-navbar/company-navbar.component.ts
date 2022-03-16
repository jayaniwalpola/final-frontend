import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyRegister } from 'src/app/company-register';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrls: ['./company-navbar.component.css']
})
export class CompanyNavbarComponent implements OnInit {

  // let item = JSON.parse(localStorage.getItem('id'));
  item:any;
  id: any;
  data:any;
  company = new CompanyRegister();

  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.item =localStorage.getItem('id');
    // console.log(localStorage.getItem('id'));
    this.getNav();

  }
  getNav(){
    this.dataService.comGetById(this.item,this.data).subscribe(res =>{
      // console.log(res);
      this.data =res;
      this.company =this.data ;
    });


  }



}
