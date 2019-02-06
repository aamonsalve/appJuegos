import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Vibration } from '@ionic-native/vibration/ngx';
@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})

export class JuegoPage implements OnInit {



  video:any;
  id:any;
  titulo:any;
  descripcionC:any;
  foto:any;
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;
  constructor(
    private modalController:ModalController,
    public navparams:NavParams,
    private vibracion: Vibration,
    private sanitizer: DomSanitizer
    ) {this.id=this.navparams.get('id');
    this.video=this.navparams.get('video');
    this.titulo=this.navparams.get('titulo');
    this.descripcionC=this.navparams.get('descripcionC');
    this.foto=this.navparams.get('foto');
    this.videoUrl =this.sanitizer.bypassSecurityTrustResourceUrl(this.navparams.get('video')); 
  }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss(null, undefined);
    this.vibracion.vibrate(40);
  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.navparams.get('video'));     
}


}



