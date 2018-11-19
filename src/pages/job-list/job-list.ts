import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Job } from '../../Model/job.model';
import { JobProvider } from '../../providers/job/job';
import { Observable } from 'rxjs';

/**
 * Generated class for the JobListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-job-list',
  templateUrl: 'job-list.html',
})
export class JobListPage {
  jobs: Observable<Job[]>;
  constructor(private jobProvider: JobProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.jobs = this.jobProvider.getJobList().valueChanges();
  }

}
