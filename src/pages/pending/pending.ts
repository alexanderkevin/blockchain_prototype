import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkitemPage } from '../workitem/workitem';

/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {
  item: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  workitem(item){
    console.log("pending item sent",item)
    this.navCtrl.push(WorkitemPage,{
      item: item
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingPage');
  }

}
