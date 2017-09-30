import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder{ color: #999 }
    .error :-moz-placeholder{ color: #999 }
    .error :-ms-input-placeholder{ color: #999 }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private _auth: AuthService,
              private _router: Router) {}
  ngOnInit(): void {
    this.firstName = new FormControl(
        this._auth.currentUser.firstName,
        [Validators.required,
         Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(
        this._auth.currentUser.lastName,
        Validators.required);
    this.profileForm = new FormGroup({
      lastName: this.lastName,
      firstName: this.firstName
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this._auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this._router.navigate(['events'])
    }
  }
  cancel() {
    this._router.navigate(['events'])
  }

  isValidLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  isValidFirstName() {
    return this.firstName.valid || this.firstName.untouched
    }
}