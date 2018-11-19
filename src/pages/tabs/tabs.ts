import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { JobCategoryPage } from '../job-category/job-category';
import { CreateJobPage } from '../create-job/create-job';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../Model/user.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { JobListPage } from '../job-list/job-list';
import { CurriculumPage } from '../curriculum/curriculum';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  userData: Observable<User>;
  type: string;
  // company tabs
  tab1Root = HomePage;
  tab2Root = JobListPage;
  tab3Root = ContactPage;
  tab4Root = CreateJobPage;

  // estagiario tabs
  tab5Root = CurriculumPage;
  tab6Root = JobCategoryPage;
  tab7Root = ContactPage;


  constructor(private auth: AuthServiceProvider, private db: AngularFirestore) {
    this.auth.afAuth.authState.subscribe(r => {
      if (r) {
        this.userData = this.db.doc<User>(`users/${r.uid}`).valueChanges();
      }
    });
  }
  ionViewDidLoad() {

  }
}
