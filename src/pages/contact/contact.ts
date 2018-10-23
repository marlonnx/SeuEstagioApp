import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
show = true;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {

  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Enviando...",
      duration: 1500
    });
    loader.present();
  }
  func() {
    this.presentLoading();

    setTimeout(() => {
      this.show = false;
    }, 2100);
    this.presentLoading();
  }

  ionViewWillEnter(){
    this.show = true;
  }
}
