import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/app/channel';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {


  id: any;
  data: any;
  channel = new Channel();
  channels: any;


  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params.id;
    // console.log(this.route.snapshot.params.id);
    // this.id ="1";
    this.getChannel();
  }
   getChannel(){
      this.dataService.channelGet(this.id,this.data).subscribe(res=>{
        // this.channels=res;
        console.log(res);
      });
    }


}
