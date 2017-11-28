import $ from 'jquery';

export default class AppService {
  constructor() {
    this.url = 'http://localhost:8080';
  }

  getDevice(id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${this.url}/devices/${id}`,
        method: 'GET',
      }).done((res) => {
        resolve(res);
      }).fail(() => {
        reject(new Error('Erro'));
      });
    });
  }

  getDevices() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${this.url}/devices`,
        method: 'GET',
      }).done((res) => {
        resolve(res);
      }).fail(() => {
        reject(new Error('Erro'));
      });
    });
  }
}
