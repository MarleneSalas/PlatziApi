import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatziApiService {
  private url ="https://api.escuelajs.co/api/v1/products";
  constructor(private http:HttpClient) { 

  }
  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  getProduct(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }
  
  post(products:any){
    return this.http.post(this.url, products);
  }

  getCategories():Observable<any>{
    return this.http.get("https://api.escuelajs.co/api/v1/categories");
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  put(products:any){
    return this.http.put(`${this.url}/${products.id}`,products);
  }
}
