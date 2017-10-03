import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { el } from '@angular/platform-browser/testing/src/browser_util';

@Component({
  templateUrl: 'app/user/login.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; } 
  `]
})
export class LoginComponent {
  loginInvalid:boolean = false;

  constructor(private _authService: AuthService,
              private _router: Router) {}

  login(formValues) {
    console.log(formValues)
    this._authService.loginUser(formValues.username, formValues.password)
      .subscribe(res => {
        if (!res) {
          this.loginInvalid = true;
        } else {
          this.getEvents()
        }
      })
  }

  cancel() {
    this.getEvents()
  }

  getEvents() {
    this._router.navigate(['/events'])
  }
}