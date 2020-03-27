import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import * as moment from 'moment';
@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styles: []
})
export class SuppliesComponent implements OnInit {

  beds = [];
  date: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getBed();
    this.date = `${moment().format('DD/MM/')}${(+moment().format('YYYY') + 543)}`;
  }


  async getBed() {
    try {
      const rs: any = await this.apiService.getSupplieOps();
      if (rs.ok) {
        this.beds = rs.rows;
      } else {
        console.log(rs.error);

      }
    } catch (error) {
      console.log(error);

    }
  }

}
