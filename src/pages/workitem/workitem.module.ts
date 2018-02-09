import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkitemPage } from './workitem';

@NgModule({
  declarations: [
    WorkitemPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkitemPage),
  ],
})
export class WorkitemPageModule {}
