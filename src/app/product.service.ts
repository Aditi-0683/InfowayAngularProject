import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// api is global variable
const api="http://localhost:5555/product/";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
