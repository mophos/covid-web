import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import * as moment from 'moment';
@Component({
  selector: 'app-profressional',
  templateUrl: './profressional.component.html',
  styles: []
})
export class ProfressionalComponent implements OnInit {

  data = [];
  date: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getDoctor();
    this.date = `${moment().format('DD/MM/')}${(+moment().format('YYYY') + 543)}`;
  }


  async getDoctor() {
    try {
      const rs: any = await this.apiService.getDoctor();
      if (rs.ok) {
        this.data = rs.rows;
      } else {
        console.log(rs.error);

      }
    } catch (error) {
      console.log(error);

    }
  }

}
