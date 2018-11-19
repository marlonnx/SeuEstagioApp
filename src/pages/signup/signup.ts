import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../Model/user.model';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupError: string;
  form: FormGroup;

  constructor(private db: AngularFirestore, public navCtrl: NavController,
    private auth: AuthServiceProvider, public navParams: NavParams, fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      type: [null, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    const data = this.form.value;
    const credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signUp(credentials).then(
      (r) => {

        const user: User = {
          'id': r.user.uid,
          'email': r.user.email,
          'type': data.type
        };
        this.db.doc<User>('users/' + r.user.uid).set(user);

        this.navCtrl.setRoot(HomePage);
      },
      error => this.signupError = error.message);
  }

}
