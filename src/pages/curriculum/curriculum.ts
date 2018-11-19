import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfCnpjValidator } from '../../validators/cpf-cnpj.validator';

/**
 * Generated class for the CurriculumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-curriculum',
  templateUrl: 'curriculum.html',
})
export class CurriculumPage {
  form: FormGroup;
  constructor(public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.form = this.fb.group({
      personalInformation: this.fb.group({
        'cpf': ['', Validators.compose([Validators.required, CpfCnpjValidator.validate])],
        'name': [null, Validators.required],
        'lastName': [null, Validators.required],
        'resumo': [null],
        'phone': [null, Validators.required],
        'celphone': [null, Validators.required],
        'birthDate': [null, Validators.required],
        'civilState': [null, Validators.required],
        'sex': [null, Validators.required],
        'cep': [null, Validators.required],
        'state': [null, Validators.required],
        'city': [null, Validators.required],
        'neighborhood': [null, Validators.required],
        'Rua': [null, Validators.required],
        'number': [null, Validators.required],
        'complemento': [null, Validators.required],
      }),
      social: this.fb.group({
        'linkedin': [null, Validators.required],
        'facebook': [null, Validators.required],
        'twitter': [null],
        'google+': [null, Validators.required],
        'youtube': [null, Validators.required],
        'instagram': [null, Validators.required],
      }),
      schooling: this.fb.group({

      }),
    });
  }

}
