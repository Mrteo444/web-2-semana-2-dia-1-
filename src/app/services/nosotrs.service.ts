import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosotrsService {

  constructor(private http: HttpClient) { }

  private API_NOSOTROS= 'http://localhost:3000/nostros'

  getNosotros():Observable <any>{
    return this.http.get(this. API_NOSOTROS)
  }

  ////post 

  postNosotros(persona:JSON):Observable <any>{
    return this.http.post(this.API_NOSOTROS,persona)
  }
}
