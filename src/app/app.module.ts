import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from "../pages/login/login.module";
import { LoginPage } from "../pages/login/login";
import { ManagerPageModule } from "../pages/manager/manager.module";
import { ManagerPage } from "../pages/manager/manager";
import { AuthLoginProvider } from '../providers/auth-login/auth-login';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { GetEquipamentInfoProvider } from '../providers/get-equipament-info/get-equipament-info';
import {EquipamentInfoPageModule} from "../pages/equipament-info/equipament-info.module";
import {EquipamentInfoPage} from "../pages/equipament-info/equipament-info";
import { SendErrorProvider } from '../providers/send-error/send-error';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ManagerPageModule,
    EquipamentInfoPageModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ManagerPage,
    EquipamentInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    AuthLoginProvider,
    GetEquipamentInfoProvider,
    SendErrorProvider
  ]
})
export class AppModule {}
