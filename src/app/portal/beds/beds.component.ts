import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styles: []
})
export class BedsComponent implements OnInit {

  beds = [];
  sum: any = {};
  bedOps = [];
  bedOutOps = [];
  date: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getBed();
    this.getBedOps();
    this.getBedOutOps();
    this.date = `${moment().format('DD/MM/')}${(+moment().format('YYYY') + 543)}`;
  }


  async getBed() {
    try {
      const rs: any = await this.apiService.getBedSumary();
      if (rs.ok) {
        this.beds = rs.rows;
        this.sum = rs.sum;
      } else {
        console.log(rs.error);

      }
    } catch (error) {
      console.log(error);

    }
  }
  async getBedOps() {
    try {
      const rs: any = await this.apiService.getBedOps();
      if (rs.ok) {
        this.bedOps = rs.rows;
      } else {
        console.log(rs.error);

      }
    } catch (error) {
      console.log(error);

    }
  }

  async getBedOutOps() {
    try {
      const rs: any = await this.apiService.getBedOutOps();
      if (rs.ok) {
        this.bedOutOps = rs.rows;
      } else {
        console.log(rs.error);

      }
    } catch (error) {
      console.log(error);

    }
  }
}
