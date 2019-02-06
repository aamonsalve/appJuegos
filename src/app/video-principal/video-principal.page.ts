import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-video-principal',
  templateUrl: './video-principal.page.html',
  styleUrls: ['./video-principal.page.scss'],
})
export class VideoPrincipalPage implements OnInit {
video:any;
id:any;
  constructor(private modalController:ModalController,
    public navparams:NavParams
    ) {this.id=this.navparams.get('id');
    this.video=this.navparams.get('video');
  }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss();
  }

}