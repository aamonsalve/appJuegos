import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SteamService {
  miSteam: any;

  constructor(private fireStore: AngularFirestore) {
    this.miSteam = fireStore.collection<any>(environment.firebaseConfig.steamColection)
  }

  /**
   * Recupera todos los juegos de steam
   */
  leeSteam() {
    return this.miSteam.ref.get();
  }

  
}