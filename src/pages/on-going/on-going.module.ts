import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnGoingPage } from './on-going';

@NgModule({
  declarations: [
    OnGoingPage,
  ],
  imports: [
    IonicPageModule.forChild(OnGoingPage),
  ],
})
export class OnGoingPageModule {}
