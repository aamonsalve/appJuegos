import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Ps4Service {
  miSteam: any;

  constructor(private fireStore: AngularFirestore) {
    this.miSteam = fireStore.collection<any>(environment.firebaseConfig.ps4Colection)
  }
/**
   * Recupera todos los juegos de ps4.
   */
  leePs4() {
    return this.miSteam.ref.get();
  }

  
  
}