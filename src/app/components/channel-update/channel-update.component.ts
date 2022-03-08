import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Channel } from 'src/app/channel';
import { DataService } from 'src/app/service/data.service';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



@Component({
  selector: 'app-channel-update',
  templateUrl: './channel-update.component.html',
  styleUrls: ['./channel-update.component.css']
})
export class ChannelUpdateComponent implements OnInit {

  id: any;
  data:any;
  channel = new Channel();
  apiUrl = environment.backend_url;

  constructor(private dataService: DataService,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id  = this.route.snapshot.params.id;
    this.getChannel();
  }

  getChannel(){
    this.dataService.channelGetDataById(this.id).subscribe(res =>{
      // console.log(res);
      this.data =res;
      this.channel =this.data ;
    });
  }

  updateChannel(){

    const fd = new FormData();
    fd.append('channel_name',this.channel.channel_name);
    fd.append('description',this.channel.description);
    fd.append('summary',this.channel.summary);

    console.log(this.channel.channel_name);
    console.log(this.channel.description);
    console.log(this.channel.summary);

    this.http.put(this.apiUrl+'/channelUpdate/'+this.id,fd,{
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
            this.router.navigate(['channeladd']);
          }
      }
    })

    this.dataService.channelEdit(this.id,this.channel).subscribe(res =>{

    })
  }

}
