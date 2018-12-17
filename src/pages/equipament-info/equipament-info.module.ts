import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipamentInfoPage } from './equipament-info';

@NgModule({
  declarations: [
    EquipamentInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipamentInfoPage),
  ],
})
export class EquipamentInfoPageModule {}
