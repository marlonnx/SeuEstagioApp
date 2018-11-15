import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { JobCategoryPage } from '../job-category/job-category';
import { CreateJobPage } from '../create-job/create-job';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = JobCategoryPage;
  tab3Root = CreateJobPage;

  constructor() {

  }
}
