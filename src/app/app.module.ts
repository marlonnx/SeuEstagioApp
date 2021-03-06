import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JobDetailPage } from '../pages/job-detail/job-detail';
import { JobCategoryPage } from '../pages/job-category/job-category';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CreateJobPage } from '../pages/create-job/create-job';
import { JobProvider } from '../providers/job/job';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    JobDetailPage,
    JobCategoryPage,
    TabsPage,
    LoginPage,
    SignupPage,
    CreateJobPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    JobDetailPage,
    JobCategoryPage,
    TabsPage,
    LoginPage,
    CreateJobPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AngularFireAuth,
    JobProvider
  ]
})
export class AppModule {}
