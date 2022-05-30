import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegServiceService {


  public pass:any;
  constructor(private _http:HttpClient, private router:Router, ) {
   }
   
   
   register(data:any){
     return this._http.post<any>(' http://localhost:3000/posts/',data)
    }
    getprofile():Observable<any>{
      return this._http.get<any>( 'http://localhost:3000/posts/')
    }
    deleteStudent(id:number):Observable<any>{
      return this._http.delete('http://localhost:3000/posts/'+id);
    }
    
    
    
  
  
  setData(data:any){
    this.pass=data;
    
  }
  getData(){
    let temp = this.pass;
    return temp;

  }


}

