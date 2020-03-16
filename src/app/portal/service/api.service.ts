import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    @Inject('API_URL') private url: string,
    private http: HttpClient) {

  }

  async getSummaryTH() {
    const url = `${this.url}/summary/th`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }

  async getSummaryGlobal() {
    const url = `${this.url}/summary/global`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }
}
