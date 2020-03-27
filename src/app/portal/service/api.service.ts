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

  async getPr() {
    const url = `${this.url}/pr`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }

  async getInfographic() {
    const url = `${this.url}/infographic`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }

  async getSummaryGlobal() {
    const url = `${this.url}/summary/global`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }

  async addVisit(device) {
    const url = `${this.url}/add-visit`;
    const rs: any = await this.http.post(url, { device }).toPromise();
    return rs;
  }

  async getVisit() {
    const url = `${this.url}/visit`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }

  async getNews() {
    const url = `${this.url}/news`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }

  async getBedOps() {
    const url = `${this.url}/eocdms/bed/province`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }
  async getBedSumary() {
    const url = `${this.url}/eocdms/bed-sumary`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }
  async getDoctor() {
    const url = `${this.url}/eocdms/doctor`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }

  async getBedOutOps() {
    const url = `${this.url}/eocdms/bed-out-ops/province`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }

  async getSupplieOps() {
    const url = `${this.url}/eocdms/supplie/province`;
    const rs: any = await this.http.get(url).toPromise();
    return rs;
  }
}
