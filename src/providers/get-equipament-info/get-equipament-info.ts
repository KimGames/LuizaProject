import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GetEquipamentInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetEquipamentInfoProvider {

  private url: string = 'http://10.15.78.205:8080/equipamento/findOne';
  private response: string = '';

  constructor(public http: HttpClient) {}

  public responseGet(idToSend: number): string{
    this.getFromApi(idToSend).subscribe(data => {
        const response = (data as any);
      },
      error => {
        console.log(error);
      });
    return this.response;
  }

  private getFromApi(idToSend: number) {
    let config = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWd1aXJlbGxpIiwic2NvcGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNTQxMDA5ODUzLCJleHAiOjYxNTQxMDA5ODUzfQ.wB-sZBQROh11wKYjzzJlSf8vlxPCOUONALWDv_siqW1dRJiWD6YLAdz-VRJP2g4e1F2OAfW_nQesLgO0uqK_7g')
    };

    let body = JSON.stringify({
      "id" : idToSend
    });
    body = JSON.parse(body);

    return this.http.post(this.url, body, config);
  }
}
