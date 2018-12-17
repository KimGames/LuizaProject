import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetEquipamentInfoProvider } from "../../providers/get-equipament-info/get-equipament-info";

/**
 * Generated class for the EquipamentInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipament-info',
  templateUrl: 'equipament-info.html',
})
export class EquipamentInfoPage {

  public Info = {
    id: '',
    name: '',
    model: '',
    controlNumber: '',
    acquisitionDate: '',
    nextPreventive: '',
    status: '',
    importance: '',
    hospital: '',
    sector: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private getEquipamentInfoProvider: GetEquipamentInfoProvider) {
    let idToSend = navParams.get('id');
    let responseFromServer = this.makeRequest(idToSend);
    alert(JSON.stringify(responseFromServer));

    this.Info.id = JSON.parse(responseFromServer).id;
    this.Info.name = JSON.parse(responseFromServer).name;
    this.Info.model = JSON.parse(responseFromServer).model;
    this.Info.controlNumber = JSON.parse(responseFromServer).controlNumber;
    this.Info.acquisitionDate = JSON.parse(responseFromServer).acquisitionDate;
    this.Info.nextPreventive = JSON.parse(responseFromServer).nextPreventive;
    this.Info.status = JSON.parse(responseFromServer).status;
    this.Info.importance = JSON.parse(responseFromServer).importance;
    this.Info.hospital = JSON.parse(responseFromServer).hospital;
    this.Info.sector = JSON.parse(responseFromServer).sector;
  }

  private makeRequest(jsonToSend): string {
    return this.getEquipamentInfoProvider.responseGet(jsonToSend);
  }
}
