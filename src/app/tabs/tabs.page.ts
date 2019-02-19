import { Component } from '@angular/core';
import { BackbuttonService } from 'src/app/servicios/backbutton.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(
    private back: BackbuttonService) {

  }
}
