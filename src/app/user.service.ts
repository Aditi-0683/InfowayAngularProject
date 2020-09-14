import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



const api="http://localhost:5556/user/";
@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  saveData(data)
  {
    return this.httpClient.post(api,data)
  }
  
  getData()
  {
    return this.httpClient.get(api)
  }

  getDataById(id){
    return this.httpClient.get(api+id)
  }

  updateData(id,data)
  {
    return this.httpClient.put(api+id,data);
  }

  deleteData(id)
  {
    return this.httpClient.delete(api+id);
  }

  
  constructor(private httpClient:HttpClient) { }
}
