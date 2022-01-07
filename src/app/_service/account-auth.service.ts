import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

import { environment } from '../../environments/environment'
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountAuthService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/user/register`, user);
  }

  vehicle(){
      return this.http.get(`${environment.apiUrl}/vehicle`);
  }

  login(user: User) {
    return this.http.post<User>(`${environment.apiUrl}/user/login`, user)
    .pipe(
      map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}
