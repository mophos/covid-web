import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styles: []
})
export class CommandComponent implements OnInit {

  html: any;
  url: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCommand();
  }

  async getCommand() {
    try {
      const rs: any = await this.apiService.getCommand();
      if (rs.ok) {
        // this.data = rs.rows[0].html;
        this.url = rs.rows[0].url;
        this.html = rs.rows[0].html;
      }
    } catch (error) {

    }
  }
}
