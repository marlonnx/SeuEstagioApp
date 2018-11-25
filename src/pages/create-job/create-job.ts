import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from '../../Model/job.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { JobProvider } from '../../providers/job/job';

/**
 * Generated class for the CreateJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-create-job',
  templateUrl: 'create-job.html',
})
export class CreateJobPage {
  form: FormGroup;
  categories: Observable<any>;
  constructor(public jobProvider: JobProvider, public fb: FormBuilder,
    public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore) {
    this.categories = this.db.collection('categories').valueChanges();

    this.form = fb.group({
      'title': [null, Validators.required],
      'local': [null, Validators.required],
      'description': [null, Validators.required],
      'category': [null, Validators.required],
      'requirements': [null, Validators.required],
      'benefits': [null, Validators.required],
    });
  }

  ionViewDidLoad() {

  }

  submit(form) {

    this.jobProvider.createJob(form).then(() => console.log('success'));
  }
}
