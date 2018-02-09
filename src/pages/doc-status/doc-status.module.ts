import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocStatusPage } from './doc-status';

@NgModule({
  declarations: [
    DocStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(DocStatusPage),
  ],
})
export class DocStatusPageModule {}
