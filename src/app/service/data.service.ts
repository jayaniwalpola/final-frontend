import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getDropDownText(id:any, object:any){
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }
  // getData(data: any){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/companyRegister',data);
  // }

  registerData(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/companyRegister',data);
  }
  loginCompany(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/companyLogin',data);
  }
  companyGet(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/getCompany',data);
  }
  comGetById(id: any,data:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getCompanyById/'+id,data);
  }
  jobGetById(id: any,data:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getJobSeekerById/'+id,data);
  }
  channelGet(id:any,data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/getChannel/'+id,data);
  }
  channelAdd(id: any,data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/channelAdd/'+id,data);
  }
  channelDelete(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/channelDelete/'+id);
  }
  channelGetDataById(id:any,data:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getChannelById/'+id,data);
  }
  channelEdit(id: any,data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/channelUpdate/'+id,data);
  }
  vacancyGet(id: any,data:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/geVacancyById/'+id,data);
  }
  vacancyGetByComID(id: any,data:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getVacByCompanyId/'+id,data);
  }
  vacancyDelete(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/vacancyDelete/'+id);
  }
  vacancyAdd(id:any,data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/vacancyAdd/'+id,data);
  }
  vacancyGetById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getVacancy/'+id);
  }
  vacancyEdit(id: any,data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/vacancyUpdate/'+id,data);
  }
  vacancyChannelCompanyById(id:any,data:any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/getChannelCompany/'+id,data);
  }

  comGet(id: any,data:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getCompanyById/'+id,data);
  }
}
