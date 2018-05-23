import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PanelData } from './model/panelData';
import { Observable } from 'rxjs';
import { HttpResponseData } from './model/httpResponseData';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = "";
  resultConfig: Array<PanelData> = [];
  constructor(private http: HttpClient) {
 
    if (isDevMode() || (location.href!=null && location.href.indexOf("localhost")>0)) {
      console.log("Running in dev mode .. and location is "+location.href);
      this.configUrl = "http://localhost:3000";
    }
  }
  // Disbale Cors
  // open -n -a /Applications/Google\ Chrome.app --args --user-data-dir="/tmp/someFolderName" --disable-web-security

  fetch() :Observable<HttpResponseData>{
    return this.http.get<HttpResponseData>(this.configUrl + "/config", httpOptions)
  }

  save(postData: Array<PanelData>): Observable<HttpResponseData> {

    return this.http.post<HttpResponseData>(this.configUrl + "/config", postData, httpOptions)

  }

  // internal business login
  public deleteResultConfig(cId: number, pId: number) {
    if (this.resultConfig.length > 0) {
        if (pId > 0) {
            this.resultConfig.forEach((item, i) => {
                if (pId === item.internalId) {
                    this.resultConfig.splice(i, 1);
                    return;
                }
            });
        } else if (cId > 0) {
            this.resultConfig.forEach(p => {
                if (p.availableCards.length > 0) {
                    p.availableCards.forEach((c, j) => {
                        if (cId === c.internalId) {
                            p.availableCards.splice(j, 1);
                            return;
                        }
                        
                    });
                }
            });
        }else{
            console.log("No data available for given cId "+ cId +" or "+"pId "+pId);
        }
    } else {
        console.log("No data available");
    }
}
}