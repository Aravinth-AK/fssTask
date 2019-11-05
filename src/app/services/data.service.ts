import { Injectable } from '@angular/core';
import { observable,from, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  serverUrl='https://lit-thicket-28326.herokuapp.com/';
  tagPayload:any[]=[];
  tagsSkeleton: any[] = [
    {
      'name': 'input',
      'value': 'textfield',
      'type': 'text'
    },
    {
      'name': 'select'
    },
    {
      'type': 'checkbox',
      'name': 'checkbox',
      'label': 'label',
      'id': 'checkbox'
    },
    {
      'name': 'radio',
      'type': 'radio',
      'label': 'label'

    },
    {
      'name': 'button',
      'type': 'button'
    }
  ]


  constructor(private http:HttpClient) { }

  AddElement(element){
    this.tagPayload=element;

    return;
  }

  postTemplatePayload(payload){
    let tagPay={
      'data':payload
    }
         return this.http.post(this.serverUrl+'comp',tagPay).pipe(map((data:any)=>{
           return data;
         }))
  }


}
