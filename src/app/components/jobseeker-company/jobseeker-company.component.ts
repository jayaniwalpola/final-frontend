import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyRegister } from 'src/app/company-register';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-jobseeker-company',
  templateUrl: './jobseeker-company.component.html',
  styleUrls: ['./jobseeker-company.component.css']
})
export class JobseekerCompanyComponent implements OnInit {

  id: any;
  data:any;
  company = new CompanyRegister();
  companyChannels:any;
  companies:any;
  view:boolean =false;
  search: boolean = false;
  searchResults:any;
  apiUrl = environment.backend_url;



  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params.id;
    this.getchan();
    this.getCom()
  }
  getchan(){
    this.dataService.vacancyChannelCompanyById(this.id,this.data).subscribe(res =>{
      // console.log(res);
      this.view =true;
      this.companyChannels = res;
    });
  }

  getCom(){
    this.dataService.comGet(this.id,this.data).subscribe(res =>{
      // console.log(res);
      this.data =res;
      this.company =this.data ;

    })
  }
  subscribe(){

    console.log("subscribe jayai");
  }
  searchValue(value:any){

    this.search =true;
    this.view = false;

    const fd = new FormData();

    fd.append('search',value);
    console.log(value);

    this.http.post(this.apiUrl+'/searchChannel/'+this.id,fd,{
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
          this.searchResults = event.body;

      }


  });

  }

}
