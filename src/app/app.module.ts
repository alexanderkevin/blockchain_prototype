import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { PendingPage } from '../pages/pending/pending';
import { OnGoingPage } from '../pages/on-going/on-going';
import { DocStatusPage } from '../pages/doc-status/doc-status';
import { WorkitemPage } from '../pages/workitem/workitem';
import { WorkflowPage } from '../pages/workflow/workflow';
import { HistoryPage } from '../pages/history/history';
import { NewstreamPage } from '../pages/newstream/newstream';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    LogoutPage,
    PendingPage,
    OnGoingPage,
    DocStatusPage,
    WorkitemPage,
    WorkflowPage,
    HistoryPage,
    NewstreamPage,
    DocStatusPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    LogoutPage,
    PendingPage,
    OnGoingPage,
    DocStatusPage,
    WorkitemPage,
    WorkflowPage,
    HistoryPage,
    NewstreamPage,
    DocStatusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
