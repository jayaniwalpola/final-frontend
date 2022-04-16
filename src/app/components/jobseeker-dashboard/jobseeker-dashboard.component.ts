import { Component, OnInit } from '@angular/core';
import { CompanyRegister } from 'src/app/company-register';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-jobseeker-dashboard',
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrls: ['./jobseeker-dashboard.component.css']
})
export class JobseekerDashboardComponent implements OnInit {

  companies: any;
  data: any;
  view:boolean =false;
  search: boolean = false;
  company = new CompanyRegister();
  All:boolean=false;
  searchResults:any;
  apiUrl = environment.backend_url;
  errorMsg:any;
  error: boolean = false;


  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.dataService.companyGet(this.data).subscribe(res=>{
      console.log(res);
      // this.All = true;
      this.view=true;
      this.error =false;
      this.companies=res;
    });
  }
  searchValue(value:any){
    this.search =true;
    this.view = false;
    this.error =false;

    const fd = new FormData();

    fd.append('search',value);
    console.log(value);

    this.http.post(this.apiUrl+'/searchCompany',fd,{
      reportProgress:true,
      observe:'events'
    }).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:

          break;
        case HttpEventType.Response:
          console.log(event.body);
          if(event.body.response == "false")
          {

            this.search = false;
            this.view = false;
            this.error = true;
            this.errorMsg = event.body.msg;
          }
          this.searchResults = event.body;

      }


  });

    // if(value==""){
    //   this.getCompany();
    //   this.search = false;
    // }else{
    //   this.dataService.searchValue(value).subscribe(res =>{
    //     console.log(res);
    //     this.search=true;
    //     this.view=false;
    //     this.searchResults = res;

    //   })
    // }



  }

}
