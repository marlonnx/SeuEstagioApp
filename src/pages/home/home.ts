import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobDetailPage } from '../job-detail/job-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hotJobs = [
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt:'13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt:'13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt:'13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt:'13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt:'13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt:'13/09 09:25 - Belo Horizonte, MG'
    },
    {
      jobTitle: 'Estagio Cursando Direito - Belo Horizonte',
      jobDescription: ' Futura Estágios Jurídica - Trabalhista amet culpa praesentium necessitatibus facere quae dignissimos sunt.',
      jobCreatedAt:'13/09 09:25 - Belo Horizonte, MG'
    },
  ]
  constructor(public navCtrl: NavController) {

  }


  goDetail(){
    this.navCtrl.push(JobDetailPage);
  }
}
