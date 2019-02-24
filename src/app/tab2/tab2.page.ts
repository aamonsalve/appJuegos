
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController } from '@ionic/angular';
import { ModalController, NavParams } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  user: any;
  userReady: boolean = false;

  constructor(
    private googlePlus: GooglePlus,
    private modalController:ModalController,
    private vibracion: Vibration,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router
  ) { }

   /**
   * Metodo para cargar la pagina con todos los datos , del nombre, correo y la foto del email.
   */
  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Espere...'
    });
     await loading.present();
     this.nativeStorage.getItem('google_user')
    .then(data => {
      this.user = {
        name: data.name,
        email: data.email,
        picture: data.picture,
      };
      this.userReady = true;
      loading.dismiss();
    }, error =>{
      console.log(error);
      loading.dismiss();
    });
  }
 /**
   * Cuando nos deconectamos con nuestra cuenta y volvemos a la pantalla de inicio sesion
   */
  doGoogleLogout(){
    this.googlePlus.logout()
    .then(res => {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('google_user');
      this.router.navigate(["/inicio"]);
    }, err => {
      console.log(err);
    });
  }
   /**
   * Cuando pulsamos el boton de atras y nos volvemos a la pagina de tabs y vibra.
   */
  dismiss(){
    this.router.navigate(["/tabs"]);
    this.vibracion.vibrate(40);
  }
}