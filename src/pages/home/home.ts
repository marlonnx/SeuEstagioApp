import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobDetailPage } from '../job-detail/job-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goDetail(){
    this.navCtrl.push(JobDetailPage);
  }
}
