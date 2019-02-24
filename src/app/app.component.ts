import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { BackbuttonService } from './servicios/backbutton.service';
import { NetworkService } from './servicios/network.service';
import { CustomToastModule } from './customModules/custom-toast/custom-toast.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private traducir :TranslateService,
    private back :BackbuttonService,
    private toast: CustomToastModule,
    private network: NetworkService,
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    private router: Router
  ) {
    this.initializeApp();
  }
  /**
   * Se utiliza para cambiar de idioma.
   * @param $event
   */
  cambiarIdioma($event) {
    //console.log(this.langModel);
   this.traducir.use($event.target.value);
   console.log($event.target.value);
   
  }  
  /**
   * Se ejecuta al iniciar la aplicación.
   * Se nos va a la pagina de inicio estemos o no logueados, para volver a loguarnos por si queremos usar otro.S
   */
  initializeApp() {
    this.platform.ready().then(() => {
      //Here we will check if the user is already logged in
      //because we don't want to ask users to log in each time they open the app
      this.nativeStorage.getItem('google_user')
      .then( data => {
        //user is previously logged and we have his data
        //we will let him access the app
        this.router.navigate(["/inicio"]);
        this.splashScreen.hide();
      }, err => {
        this.router.navigate(["/inicio"]);
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    });

    this.traducir.setDefaultLang('es');
  }
  /**
   * Se ejecuta para hacer logout de la cuenta de google.
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
  
}