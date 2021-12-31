import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { AccountAuthService } from '../_service/account-auth.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  hide = true;

  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]]
  });

  constructor(
    private fb: FormBuilder,
    private accountAuthService: AccountAuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.accountAuthService.register(this.registrationForm.value)
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {

        });
  }
}
