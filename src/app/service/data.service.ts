import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  registerData(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/companyRegister',data);
  }
  loginCompany(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/companyLogin',data);
  }
  channelGet(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/getChannel',data);
  }
  channelAdd(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/channelAdd',data);
  }
  channelDelete(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/channelDelete/'+id);
  }
  channelGetDataById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getChannelById/'+id);
  }
  channelEdit(id: any,data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/channelUpdate/'+id,data);
  }
  vacancyGet(id: any,data:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/geVacancyById/'+id,data);
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
}
