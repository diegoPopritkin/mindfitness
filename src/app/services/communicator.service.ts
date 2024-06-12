import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  constructor(
    private http: HttpClient,
  ) { }

  url = "https://webhook-test.com/dcb3a244237e694d93d9ba0ff87d1f55";

  public getStates() {
    return this.http.post(this.url, {});
  }
}
