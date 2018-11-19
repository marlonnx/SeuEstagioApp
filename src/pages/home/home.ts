import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobDetailPage } from '../job-detail/job-detail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../Model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hotJobs = [
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt: '13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt: '13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt: '13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt: '13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt: '13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt: '13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt: '13/09 09:25 - Belo Horizonte, MG'
    },
  ];

  constructor(public db: AngularFirestore, public navCtrl: NavController, private auth: AuthServiceProvider) {

  }

  goDetail() {
    this.navCtrl.push(JobDetailPage);
  }

  logOut() {
    this.auth.signOut();
  }
}
