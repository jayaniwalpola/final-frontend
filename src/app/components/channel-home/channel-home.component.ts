import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/channel';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-channel-home',
  templateUrl: './channel-home.component.html',
  styleUrls: ['./channel-home.component.css']
})
export class ChannelHomeComponent implements OnInit {

  channels: any;
  data: any;
  channel = new Channel();
  item:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  this.item = sessionStorage.getItem('id');
  // console.log(localStorage.getItem('id'));


    this.getChannel();
    // console.log(response.user.id);
  }
  getChannel(){
    this.dataService.channelGet(this.item,this.data).subscribe(res=>{
      this.channels=res;
      // console.log(res);
    });
  }

}
