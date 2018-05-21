import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PanelData } from './model/panelData';
import { Observable } from 'rxjs';
import { HttpResponseData } from './model/httpResponseData';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
   })
};
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  // Disbale Cors
  // open -n -a /Applications/Google\ Chrome.app --args --user-data-dir="/tmp/someFolderName" --disable-web-security
  //configUrl = "http://localhost:3000";
  configUrl = "";
   
  fetch(){
      return this.http.get<Array<PanelData>>(this.configUrl+"/config",httpOptions)
  }
  save(resultConfig:Array<PanelData>):Observable<HttpResponseData>{
    
    return this.http.post<HttpResponseData>(this.configUrl+"/config",resultConfig,httpOptions)
        
  }
}