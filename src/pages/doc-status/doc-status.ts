import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DocStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doc-status',
  templateUrl: 'doc-status.html',
})
export class DocStatusPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    //console.log("selectedItem",this.selectedItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocStatusPage');
  }

}
