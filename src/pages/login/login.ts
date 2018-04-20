import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { IonicPage, NavController, NavParams, ToastController , LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;
  resposeData : any;
  constructor ( public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider, public loadingCtrl: LoadingController) {
    this.model = new User();
    this.model.email = '';
    this.model.password = '';
  }

  login() {

    //this.loadingCtrl.create({
    //  content: 'Please wait...',
    //  duration: 3000,
    //  dismissOnPageChange: true
    //}).present();

    this.userProvider.login(this.model.email, this.model.password)

      .then((result: any) => {

        if(result.msg == 'Logado'){
          //this.toast.create({ message: 'Bem Vindo! ' + result.usuario_nome , position: 'botton', duration: 3000 }).present();
          
            this.resposeData = result;
   
            if(this.resposeData.token){
             localStorage.setItem('userData', JSON.stringify(this.resposeData) )
            }

            this.navCtrl.push(TabsPage);

            //this.userDetails = JSON.parse(localStorage.getItem("userData"));
            //console.log(this.userDetails.usuario_nome);


            //Salvar o token no Ionic Storage para usar em futuras requisições.
            //Redirecionar o usuario para outra tela usando o navCtrl
            //this.navCtrl.pop();
            //this.navCtrl.setRoot();
            //localStorage.setItem('userData', JSON.stringify(this.result) );

            //console.log(JSON.stringify(this.result));
          
          }else{
            this.toast.create({ message: result.msg, position: 'botton', duration: 3000 }).present();
          }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });

      
  }
}

export class User {
  email: string;
  password: string;
}