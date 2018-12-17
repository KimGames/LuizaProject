import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ManagerPage } from "../manager/manager";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private barcodeScanOptions: any = {
    orientation : 'landscape',
    formats     : 'QR_CODE',
    prompt      : 'Place the code in the center of the square.It will be scanned automatically.'
  };
  public role: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    this.role = navParams.get('role');
  }

  public scanCode() {
    this.barcodeScanner
      .scan(this.barcodeScanOptions)
      .then(barcodeData => {
          if (barcodeData.cancelled) return false;
          else {
            console.log(barcodeData.text);
            let id = JSON.parse(barcodeData.text).id;
            this.navCtrl
              .push(ManagerPage, {
                role: this.role,
                id: id
              })
              .catch(error => console.log(error));
          }
        })
      .catch(error => console.log(error));
  }
}
