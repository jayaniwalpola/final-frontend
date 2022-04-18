import { Component, OnInit, ViewChild } from '@angular/core';
import { Channel } from 'src/app/channel';
import { DataService } from 'src/app/service/data.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { CompanyLoginComponent } from '../company-login/company-login.component';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule,Routes,ActivatedRoute  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// import {NgForm} from '@angular/forms'



@Component({
  selector: 'app-channel-add',
  templateUrl: './channel-add.component.html',
  styleUrls: ['./channel-add.component.css']
})
export class ChannelAddComponent implements OnInit {


  channels: any;
  data: any;
  channel = new Channel();
  valueVariable: any;
  channelForm = new FormGroup({});
  selected_channel_response:any = [];
  myForm:FormGroup | undefined;
  item:any;

  constructor(private toastr: ToastrService,private dataService: DataService,private dialog:MatDialog ,private modalService: NgbModal,private router:Router,private route: ActivatedRoute) { }


  ngOnInit(): void {
  this.item = sessionStorage.getItem('id');

    this.getChannel();
  }

  CheckValidations () {

   this.channelForm = new FormGroup({
     'channel_name'    :new FormControl(null,Validators.required),
     'description'     :new FormControl(null,Validators.required),
     'summary'     :new FormControl(null,Validators.required),

   });
  }


  getChannel(){
    this.dataService.channelGet(this.item,data).subscribe(res=>{
      this.channels=res;
    });
  }


  addChannel(item:any,channelF:NgForm){
    this.dataService.channelAdd(item,this.channel).subscribe(res=>{
      this.getChannel();
      // console.log(res);
    });
  channelF.reset()

  }

  deleteChannel(id:any){
    this.toastr.error('Successfully!', 'Channel Deleted');
    this.dataService.channelDelete(id).subscribe(res => {
      this.getChannel();
    });
  }
}
function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}


