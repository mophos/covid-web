import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  visit: any
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getVisit();
  }

  async getVisit() {
    try {
      const rs: any = await this.apiService.getVisit();
      if (rs.ok) {
        this.visit = rs.rows.count;
      }
    } catch (error) {

    }
  }

}
