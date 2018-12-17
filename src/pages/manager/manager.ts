import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EquipamentInfoPage} from "../equipament-info/equipament-info";
import {GetEquipamentInfoProvider} from "../../providers/get-equipament-info/get-equipament-info";
import {SendErrorProvider} from "../../providers/send-error/send-error";

/**
 * Generated class for the ManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html',
})
export class ManagerPage {

  public role: string;
  public id: number;
  public erro: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sendErrorProvider: SendErrorProvider) {
    this.role = navParams.get('role');
    this.id = navParams.get('id');
  }

  public showDoctor(): boolean {
    return this.role === 'MEDICO' || this.role === 'ENFERMEIRO';
  }

  public sendErrors(): void {
    let message = "Falta fazer";
    alert(message);
  }

  private makeRequet(): string {
    return this.sendErrorProvider.responseGet(this.id, parseInt(this.erro));
  }

  public showTecnique(): boolean {
    return this.role === 'TECNICO' || this.role === 'ENGENHEIRO';
  }

  public showInfo(): void {
    this.navCtrl
      .push(EquipamentInfoPage, {
        id: this.id
      })
      .catch(error => console.log(error));
  }
}
