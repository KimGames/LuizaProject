import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HomePage } from "../home/home";
import {ManagerPage} from "../manager/manager";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;
  public userData = {
    "username": "",
    "password": ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {}

  public ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(4),
        Validators.maxLength(10)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)]),
    });
  }

  public doLogin(): void {
    console.log("Login successfully");
    this.makeLoadingMessage("Please wait...", 1000);
    this.navCtrl
      .push(ManagerPage)
      .catch(error => console.log(error));
  }

  private makeLoadingMessage(message: string, duration: number): void {
    this.loadingCtrl
      .create({
        content: message, duration: duration
      })
      .present()
      .catch(error => console.log(error));
  }
}
