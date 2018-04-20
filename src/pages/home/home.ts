import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userDetails: any;
  public resposeData: any;

  constructor(
    public navCtrl: NavController
  ) {
    //const data = JSON.parse(localStorage.getItem("userData"));
    //this.userDetails = data.userData;
    this.userDetails = JSON.parse(localStorage.getItem("userData"));
  }

  //constructor(public navCtrl: NavController) { }

  openCreateAccount() {
    this.navCtrl.push('CreateAccountPage');
  }

  openLogin() {
    this.navCtrl.push('LoginPage');
  }

  openListUsers() {
    this.navCtrl.push('UserListPage');
  }
}