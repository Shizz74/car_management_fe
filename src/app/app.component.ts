import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccountAuthService } from './_service/account-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carFE';

  constructor(
    public translate: TranslateService,
    public accountAuthService: AccountAuthService
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');
  }
}