import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  dataTh: any = {};
  dataGlobal: any = [];
  country: any = [];

  constructor(
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    await this.getSummaryTH();
    await this.getSummaryGlobal();

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

  // async setCountry() {
  //   try {
  //     for (const i of this.dataGlobal) {
  //       this.country.push(i.country)
  //     }
  //   } catch (error) {

  //   }
  // }
}
