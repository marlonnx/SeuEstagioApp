import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../Model/user.model';
import { Observable } from 'rxjs';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private user: firebase.User;

  constructor(private db: AngularFirestore, public http: HttpClient, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;

    });
  }

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);

  }

  get authenticated(): boolean { return this.user !== null; }


  getEmail() {
    return this.user && this.user.email;
  }

  getUid() {
    return this.user && this.user.uid;
  }
  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  private oauthSignIn(provider: AuthProvider) {
    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(provider);
    } else {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => {
          return this.afAuth.auth.getRedirectResult().then(result => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            const token = result.credential.providerId;
            // The signed-in user info.
            const user = result.user;
            console.log(token, user);
          }).catch(function (error) {
            // Handle Errors here.
            alert(error.message);
          });
        });
    }
  }

  signInWithGoogle(): Promise<any> {
    console.log('Sign in with google');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider(
    ));
  }

}
