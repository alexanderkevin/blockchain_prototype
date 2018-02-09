import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocStatusPage } from '../doc-status/doc-status';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  item: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  docStatus(item){
    console.log("History item sent",item)
    this.navCtrl.push(DocStatusPage,{
      item: item
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
