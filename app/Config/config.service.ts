import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'https://www.haloapi.com/stats/h5/servicerecords/arena?players=';
  subscriptionKey = '19366212e6d247fabce1e314a05ef7b5'
  medalsUrl = 'https://www.haloapi.com/metadata/h5/metadata/medals'
  weaponsUrl = 'https://www.haloapi.com/metadata/h5/metadata/weapons'

  httpHeader = new HttpHeaders('Ocp-Apim-Subscription-Key:'+this.subscriptionKey)

getConfig(gamerTag) {
  return this.http.get(this.configUrl + gamerTag, {headers: this.httpHeader});
}

getMedals() {
  return this.http.get(this.medalsUrl, {headers: this.httpHeader});
}

getWeapons() {
  return this.http.get(this.weaponsUrl, {headers: this.httpHeader});
}


}