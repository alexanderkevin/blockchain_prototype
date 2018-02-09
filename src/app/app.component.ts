import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { PendingPage } from '../pages/pending/pending';
import { OnGoingPage } from '../pages/on-going/on-going';
import { DocStatusPage } from '../pages/doc-status/doc-status';
import { WorkitemPage } from '../pages/workitem/workitem';
import { WorkflowPage } from '../pages/workflow/workflow';
import { HistoryPage } from '../pages/history/history';
import { NewstreamPage } from '../pages/newstream/newstream';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,icon:'home' },
      { title: 'Pending', component: PendingPage,icon:'alarm' },
      { title: 'On Going', component: OnGoingPage,icon:'barcode' },
      // { title: 'Newstream', component: NewstreamPage,icon:'paper' },
      { title: 'Workflow', component: WorkflowPage,icon:'git-network' },
      { title: 'History', component: HistoryPage,icon:'archive' },
      { title: 'Log Out', component: LogoutPage,icon:'log-out' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
