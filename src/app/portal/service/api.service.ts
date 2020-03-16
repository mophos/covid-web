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
    const rs: any = await this.http.get(`${this.url}/summary/th`).toPromise();
    return rs.json();
  }
}
