import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }

  adduser(data) : Observable<any> {

    console.log("service file", data)
    return this.http.post<any>(`http://localhost:3000/users/signup`,data)
  }

  public checklogin(username,password)
    {
      return this.http.post(`http://localhost:3000/users/login`, { username, password });
    }

    viewproducts()
  {
    let url="http://localhost:3000/products/viewproducts";
    return this.http.get(url);
  }

  deletedata(id)
  {
    let url="http://localhost:3000/products/deleteproduct/"+id;
    return this.http.get(url);
  }

  viewdata(id)
  {
    let url="http://localhost:3000/products/viewdata/"+id;
    return this.http.get(url);
  }

  updatedata(id,b,c)
  {
    console.log("update service",id)
    let url="http://localhost:3000/products/updatedata/"+id;
    return this.http.post(url,{productName:b,productPrice:c})
  }
  
}

