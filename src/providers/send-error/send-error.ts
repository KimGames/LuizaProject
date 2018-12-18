import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SendErrorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SendErrorProvider {

  private url: string = 'http://10.15.78.205:8080/equipamentos/erro/save';
  private response: string = '';

  constructor(public http: HttpClient) {}

  public responseGet(equipament: number, mistake: number): string {
    this.getFromApi(equipament, mistake)
      .subscribe(data => {
          this.response = (data as any);
        },
        error => console.log(error));

    return this.response;
  }

  private getFromApi(equipament: number, mistake: number) {
    let config = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWd1aXJlbGxpIiwic2NvcGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNTQxMDA5ODUzLCJleHAiOjYxNTQxMDA5ODUzfQ.wB-sZBQROh11wKYjzzJlSf8vlxPCOUONALWDv_siqW1dRJiWD6YLAdz-VRJP2g4e1F2OAfW_nQesLgO0uqK_7g')
    };
    let body = JSON.stringify({
      "equipament": {
        "id": equipament
      },
      "mistake": {
        "id": mistake
      }
    });
    body = JSON.parse(body);

    return this.http.post(this.url, body, config);
  }
}
