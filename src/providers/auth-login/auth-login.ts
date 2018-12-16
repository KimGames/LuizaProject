import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the AuthLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthLoginProvider {

  private url: string = 'http://localhost:8080/login/user';
  private response: string = '';

  constructor(public http: HttpClient) {}

  public responseLogin(username: string, password: string): string {
    this.getFromApi(username, password)
      .subscribe(data => {
          this.response = (data as any);
        },
      error => console.log(error));

    return this.response;
  }

  private getFromApi(username: string, password: string) {
    let config = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
    };
    let body = {
      'username': username,
      'password': password
    };

    return this.http.post(this.url, body, config);
  }
}
