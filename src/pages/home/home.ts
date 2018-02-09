import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { PendingPage } from '../pending/pending';
import { DocStatusPage } from '../doc-status/doc-status';
import { OnGoingPage } from '../on-going/on-going';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: string;

  constructor(public navCtrl: NavController) {

  }

  pending(){
    this.navCtrl.push(PendingPage);
  }

  docStatus(item){
    // console.log("item",item);
    this.navCtrl.push(DocStatusPage, {
      item: item
    });
  }
  
  onGoing(){
    this.navCtrl.push(OnGoingPage);
  }
}
