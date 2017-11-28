import $ from 'jquery';

import AppService from '../service/AppService';
import DeviceModel from '../model/DeviceModel';

export default class AppController {
  constructor() {
    this.appService = new AppService();
    this.deviceModel = new DeviceModel();
    this.init();
  }

  init() {
    $('#deviceSearch').submit((event) => {
      event.preventDefault();
      const id = $('#deviceId').val();
      this.searchDevice(id);
    });
  }

  searchDevice(id) {
    this.appService.getDevice(id).then((res) => {
      console.log(res);
    }).catch((erro) => {
      console.log(erro);
    });
  }

  searchDevices() {
    this.appService.getDevices().then((res) => {
      console.log(res);
    }).catch((erro) => {
      console.log(erro);
    });
  }
}
