import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountAuthService } from 'src/app/_service/account-auth.service';
import { AlertService } from 'src/app/_service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private accountAuthService: AccountAuthService,
    private route:Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.alertService.clear();

    this.accountAuthService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        res => {
          this.route.navigate(['/registration']);
        },
        error => {
          this.alertService.error(error.error);
        });
  }

}
