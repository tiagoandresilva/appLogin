import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userDetails: any;
  public resposeData: any;
  public aberta_mes: any;
  public reparada_mes: any;
  public finalizada_mes: any;

  public aberta_dia: any;
  public reparada_dia: any;
  public finalizada_dia: any;

  constructor(
    public navCtrl: NavController,private userProvider: UsersProvider
  ) {
    this.userDetails = JSON.parse(localStorage.getItem("userData"));
    this.getHome();
  }

  getHome() {

      this.userProvider.getHome()
        .then((result: any) => {
          this.aberta_mes = result.os_aberta_mes;
          this.reparada_mes = result.os_reparada_mes;
          this.finalizada_mes = result.os_coletada_mes;

          this.aberta_dia = result.os_aberta_dia;
          this.reparada_dia = result.os_reparada_dia;
          this.finalizada_dia = result.os_coletada_dia;
        })
        .catch((error: any) => {
        });
  }

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