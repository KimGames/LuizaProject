import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {}

  public scanCode() {
    this.barcodeScanner
      .scan(this.barcodeScanOptions)
      .then(barcodeData => {
          if (barcodeData.cancelled) return false;
          else {
            console.log(barcodeData.text);
            this.navCtrl
              .push(ManagerPage)
              .catch(error => console.log(error));
          }
        })
      .catch(error => console.log(error));
  }
}
