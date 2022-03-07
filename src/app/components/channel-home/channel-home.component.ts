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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getChannel();
  }
  getChannel(){
    this.dataService.channelGet(this.data).subscribe(res=>{
      this.channels=res;
    });
  }

}
