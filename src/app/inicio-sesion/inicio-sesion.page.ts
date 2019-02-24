
import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform, ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { CustomToastModule } from '../customModules/custom-toast/custom-toast.module';
import { BackbuttonService } from '../servicios/backbutton.service';



@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage  {

  
  constructor(
    private googlePlus: GooglePlus,
    private modalController:ModalController,
    private nativeStorage: NativeStorage,
    public toastCtrl: ToastController,
    private back: BackbuttonService,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController
  ) { }
 
    /**
   * funcion para entrar con el login de google
   */

  async doGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Espere...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
      .then(user => {
        //save user data on the native storage
        this.nativeStorage.setItem('google_user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        })
        //si nos hemos registrado correctamente vamos a tabs la pantalla principal
        .then(() => {
           this.router.navigate(["/tabs"]);
        }, (error) => {
          console.log(error);
        })
        loading.dismiss();
      }, err => {
        console.log(err);
        if(!this.platform.is('cordova')){
          this.presentAlert();
        }
        loading.dismiss();
      })
  }

  /**
   * Muestra una alert que sale cuando no funciona cordova por ejemplo en el navegador.
   */
  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova no funciona en el navegador. Pruebelo en su emulador',
       buttons: ['OK']
     });

    await alert.present();
  }
 /**
   * Muestra una alert de cargando
   * @param loading 
   */

  async presentLoading(loading) {
    return await loading.present();
  }

   /**
   * Muestra una alert con el nombre de la app y con boton para darle a ok
   */
  async presentAlert2() {
    const alert = await this.alertController.create({
       message: 'Danger Bit',
       buttons: ['OK']
     });

    await alert.present();
  }

}


