import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { JuegoPage } from './juego/juego.page';
import { VideoPrincipalPage } from './video-principal/video-principal.page';
import { SafePipe } from './safe.pipe';
import { Vibration } from '@ionic-native/vibration/ngx';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BackbuttonService } from './servicios/backbutton.service';
import { NetworkService } from './servicios/network.service';
import { Network } from '@ionic-native/network/ngx';
import { CustomToastModule } from './customModules/custom-toast/custom-toast.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent,JuegoPage,VideoPrincipalPage ,SafePipe],
  entryComponents: [AppComponent,JuegoPage,VideoPrincipalPage],
  imports: [BrowserModule, IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, AppRoutingModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),],
  providers: [
    StatusBar,
    VideoPlayer,
    Vibration,
    SplashScreen,
    BackbuttonService,
    GooglePlus,
    Network,  
    NetworkService,
    CustomToastModule,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
