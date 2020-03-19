import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  config: any;
  fullpageApi: any;

  dataTh: any = {};
  dataGlobal: any = [];
  country: any = [];
  pr = [];
  info: any = [
    { url: 'https://www3.dmsc.moph.go.th/images/map_sars_cov_2.jpg' },
    { url: 'https://ddc.moph.go.th/viralpneumonia/img/infographic/info17.jpg' },
    { url: 'https://ddc.moph.go.th/viralpneumonia/img/infographic/info16.jpg' },
    { url: 'https://ddc.moph.go.th/viralpneumonia/img/infographic/info14.jpg' }];

  constructor(
    private apiService: ApiService
  ) {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      // sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
      anchors: ['p1', 'p2', 'p3'],
      navigation: false,
    };
  }

  async ngOnInit() {
    this.addVisit();
    this.getSummaryTH();
    this.getSummaryGlobal();
    this.getPr();

  }

  async addVisit() {
    try {
      await this.apiService.addVisit();
    } catch (error) {

    }
  }

  async getSummaryTH() {
    try {
      const rs: any = await this.apiService.getSummaryTH();
      if (rs.ok) {
        this.dataTh = rs.rows;
      }
    } catch (error) {

    }
  }

  async getSummaryGlobal() {
    try {
      const rs: any = await this.apiService.getSummaryGlobal();
      if (rs.ok) {
        this.dataGlobal = rs.rows;
      }
    } catch (error) {

    }
  }

  async getPr() {
    try {
      const rs: any = await this.apiService.getPr();
      if (rs.ok) {
        this.pr = rs.rows;
      }
    } catch (error) {

    }
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

  // async setCountry() {
  //   try {
  //     for (const i of this.dataGlobal) {
  //       this.country.push(i.country)
  //     }
  //   } catch (error) {

  //   }
  // }
}
