import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Job } from '../../Model/job.model'
import { AuthServiceProvider } from '../auth-service/auth-service';
import { Item } from 'ionic-angular';
/*
  Generated class for the JobProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JobProvider {

  constructor(public firestore: AngularFirestore, private auth:
    AuthServiceProvider) { }
  createJob(item: any): Promise<void> {
    let id = this.firestore.createId();
    let job:Job = {
      "id": id,
      "userEmail": this.auth.getEmail(),
      "date": new Date().toISOString(),
      'title': item.title,
      'local': item.local,
      'description': item.description,
      'categoryId': item.category,
      'requirements': item.requirements,
      'benefits': item.benefits,
      'closed': false,
      'closedDate': '',
    }
    return this.firestore.doc<Job>(`jobsList/${id}`).set(job)
  }

  getJobList(): AngularFirestoreCollection<Job> {
    return this.firestore.collection(`jobsList`, ref => ref
    .where('userEmail', '==', this.auth.getEmail()).orderBy('date',
    "desc"));

  }
}
