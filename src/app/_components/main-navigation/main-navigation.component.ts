import { Component, OnInit } from '@angular/core';
import { AccountAuthService } from 'src/app/_service/account-auth.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  constructor(
    public accountAuthService: AccountAuthService,
  ) { }

  ngOnInit(): void {
  }
}
