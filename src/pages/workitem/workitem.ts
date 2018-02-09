import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the WorkitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workitem',
  templateUrl: 'workitem.html',
})
export class WorkitemPage {
  selectedItem: any;
  todo = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.selectedItem = navParams.get('item');
  }
  
  showConfirmReject() {
    let confirm = this.alertCtrl.create({
      title: 'Reject this process?',
      message: 'Clicking proceed will close the process directly with no protocol to restart the process',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel button clicked');
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            console.log('Proceed button clicked');
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmApprove() {
    let confirm = this.alertCtrl.create({
      title: 'Approved',
      message: 'Clicking approved will proceed the document to the next process. No future rejection could be made once you approved this process.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel button clicked');
          }
        },
        {
          text: 'Approve',
          handler: () => {
            console.log('Proceed button clicked');
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

  logForm() {
    console.log(this.todo)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkitemPage');
  }

}
