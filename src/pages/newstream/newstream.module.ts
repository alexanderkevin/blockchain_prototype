import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewstreamPage } from './newstream';

@NgModule({
  declarations: [
    NewstreamPage,
  ],
  imports: [
    IonicPageModule.forChild(NewstreamPage),
  ],
})
export class NewstreamPageModule {}
