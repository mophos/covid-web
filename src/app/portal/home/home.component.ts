import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import * as publicIp from 'public-ip';
import { DeviceDetectorService } from 'ngx-device-detector';
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
  info: any = [];
  news: any = [];

  constructor(
    private apiService: ApiService,
    private deviceService: DeviceDetectorService
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
    this.getNews();
    this.getInfographic();

  }

  async addVisit() {
    try {
      const deviceInfo: any = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      const device = {
        is_mobile: isMobile,
        is_tablet: isTablet,
        is_desktop: isDesktopDevice,
        public_ip: await publicIp.v4(),
        browser: deviceInfo.browser,
        browser_version: deviceInfo.browser_version,
        host: location.host,
        os: deviceInfo.os,
        os_version: deviceInfo.os_version,
        user_agent: deviceInfo.userAgent
      };
      await this.apiService.addVisit(device);
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

  async getNews() {
    try {
      const rs: any = await this.apiService.getNews();
      if (rs.ok) {
        this.news = rs.rows;
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

  async getInfographic() {
    try {
      const rs: any = await this.apiService.getInfographic();
      if (rs.ok) {
        this.info = rs.rows;
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
