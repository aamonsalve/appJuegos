import { Component, OnInit, ViewChild, HostListener, Sanitizer } from '@angular/core';
import { IonSlides, IonInfiniteScroll, LoadingController, ModalController } from '@ionic/angular';
import { SteamService } from '../servicios/steam.service';
import { Ps4Service } from '../servicios/ps4.service';
import { XboxService } from '../servicios/xbox.service';
import { JuegoPage } from '../juego/juego.page';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BackbuttonService } from 'src/app/servicios/backbutton.service';





@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;


  SwipedTabsIndicator: any = null;
  tabs = ["selectTab(0)", "selectTab(1)", "selectTab(2)"];
  public category: any = "0";
  ntabs = 3;
  timestampsInSnapshots: true;
  listado=[];
  listadoPanel=[];
  listadoPs4=[];
  listadoPanelPs4=[];
  listadoXbox=[];
  listadoPanelXbox=[];
  
  constructor(private loadingController: LoadingController,
    private Steam: SteamService,
    private Ps4:Ps4Service,
    private router: Router,
    private back: BackbuttonService,
    private Xbox:XboxService,
    private modalContoller:ModalController) {
      this.initializeItems();

  }

   /**
   * Actualiza la categoría que esté en ese momento activa.
   * @param cat 
   */
  updateCat(cat: Promise<any>) {
    cat.then(dat => {
      this.category = dat;
      this.category = +this.category; //to int;
    });
  }

   /**
   * Método que permite actualizar el indicado cuando se cambia de slide.
   */
  updateIndicatorPosition() {
    this.SwipedTabsSlider.getActiveIndex().then(i => {
      if (this.ntabs > i) {  // this condition is to avoid passing to incorrect index
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (i * 100) + '%,0,0)';
      }
    });
  }

   /**
   * Método que anima la "rayita" mientras nos estamos deslizando por el slide.
   */
  animateIndicator(e) {
    //console.log(e.target.swiper.progress);
    if (this.SwipedTabsIndicator)
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
        ((e.target.swiper.progress * (this.ntabs - 1)) * 100) + '%,0,0)';
  }
  


initializeItems(){
  this.listadoPanel=this.listado;
}
/**
   * Loading
   * @param msg 
   */
  async presentLoading(msg) {
    let myloading = await this.loadingController.create({
      message: msg
    });
    return await myloading.present();
  }

  /**
   * Se ejecuta cuando la página ha entrado completamente y ahora es la página activa.
   * Carga los datos de todas las paginas y ademas de la rayita y de un loading hasta que cargue los datos
   */
  ionViewDidEnter() {
    
    this.SwipedTabsIndicator = document.getElementById("indicator");
    this.presentLoading("Cargando");
    this.Steam.leeSteam().then((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanel = this.listado;
      this.loadingController.dismiss();
    });


    this.Ps4.leePs4().then((querySnapshot) => {
      this.listadoPs4 = [];
      querySnapshot.forEach((doc) => {
        this.listadoPs4.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelPs4 = this.listadoPs4;
      this.loadingController.dismiss();
    });

 this.Xbox.leeXbox().then((querySnapshot) => {
      this.listadoXbox = [];
      querySnapshot.forEach((doc) => {
        this.listadoXbox.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelXbox = this.listadoXbox;
      this.loadingController.dismiss();
    });

  }

 /**
   * Actualizamos la pagina de ps4, stema y xbox.
   * 
   */
  actualizarPage() {

    this.Steam.leeSteam().then((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanel = this.listado;
      this.loadingController.dismiss();
    });


    this.Ps4.leePs4().then((querySnapshot) => {
      this.listadoPs4 = [];
      querySnapshot.forEach((doc) => {
        this.listadoPs4.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelPs4 = this.listadoPs4;
      this.loadingController.dismiss();
    });


    this.Xbox.leeXbox().then((querySnapshot) => {
      this.listadoXbox = [];
      querySnapshot.forEach((doc) => {
        this.listadoXbox.push({ id: doc.id, ...doc.data() });
      });
      this.listadoPanelXbox = this.listadoXbox;
      this.loadingController.dismiss();
    });
  }

 /**
   * inicializamos los datos obtenidos.
   * @param ev 
   */
  getInitializeItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.listadoPanel = this.listado.filter((item) => {
        console.log(item.Nombre);
        return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /**
   * obtenemos los datos.
   * @param ev 
   */
  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listadoPanel = this.listadoPanel.filter((item) => {
        return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

/**
   * Creamos el modal con los datos a mostrar
   * @param id 
   * @param titulo 
   * @param foto 
   * @param video 
   * @param descripcionC
   */

  async presentModal(id: any, titulo: any, foto: any, video: any, descripcionC: any) {
    const modal = await this.modalContoller.create({
      component: JuegoPage,
      // backdropDismiss:false,
      componentProps: { id: id, titulo: titulo, foto: foto, video: video, descripcionC: descripcionC }
    });
    return await modal.present();
  }

  /**
   * Abrimos el modal con los datos pasados
   * @param id 
   * @param titulo 
   * @param foto 
   * @param video 
   * @param descripcionC
   */

  abrirModal(id, titulo, foto, video, descripcionC) {
    this.presentModal(id, titulo, foto, video, descripcionC)
  }

 /**
   * componente con el cual refrescaremos las paginas.
   * @param refresher 
   */

  doRefresh(refresher) {
    this.Steam.leeSteam()
      .then(querySnapshot => {
        this.listado = [];
        querySnapshot.forEach((doc) => {
          this.listado.push({ id: doc.id, ...doc.data() });
        });
        this.listadoPanel = this.listado;
        //llamamos al metodo initializeItem para que recargue 
        //el arraylist con los elementos a buscar
        this.initializeItems();
        refresher.target.complete();
      });
      this.Ps4.leePs4()
      .then(querySnapshot => {
        this.listadoPs4 = [];
        querySnapshot.forEach((doc) => {
          this.listadoPs4.push({ id: doc.id, ...doc.data() });
        });
        this.listadoPanelPs4 = this.listadoPs4;
        //llamamos al metodo initializeItem para que recargue 
        //el arraylist con los elementos a buscar
        this.initializeItems();
        refresher.target.complete();
      });
      this.Xbox.leeXbox()
      .then(querySnapshot => {
        this.listadoXbox = [];
        querySnapshot.forEach((doc) => {
          this.listadoXbox.push({ id: doc.id, ...doc.data() });
        });
        this.listadoPanelXbox = this.listadoXbox;
        //llamamos al metodo initializeItem para que recargue 
        //el arraylist con los elementos a buscar
        this.initializeItems();
        refresher.target.complete();
      });
  }

  
  
}