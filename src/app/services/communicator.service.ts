import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  constructor(
    private http: HttpClient,
  ) { }

  url = "https://webhook-test.com/887b053d179d696e0b66ac98782ff6af";

  public getStates() {
    return this.http.post(this.url, {});
  }
}
