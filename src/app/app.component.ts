import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { timer } from 'rxjs/observable/timer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage: any = LoginPage;
  showSplash = true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false);
    });
    this.auth.afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
    }, () => {
      this.rootPage = LoginPage;
    }
    );
  }
}
