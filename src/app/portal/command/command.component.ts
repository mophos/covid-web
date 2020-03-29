import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styles: []
})
export class CommandComponent implements OnInit {

  data = [];
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
        this.data = rs.rows;
        console.log(this.data);
        
      }
    } catch (error) {

    }
  }
}
