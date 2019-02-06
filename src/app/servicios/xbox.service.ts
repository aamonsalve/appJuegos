import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class XboxService {
  miSteam: any;

  constructor(private fireStore: AngularFirestore) {
    this.miSteam = fireStore.collection<any>(environment.firebaseConfig.xboxColection)
  }

  leeXbox() {
    return this.miSteam.ref.get();
  }

}