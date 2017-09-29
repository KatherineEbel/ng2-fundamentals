import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'app/user/profile.component.html'
})
export class ProfileComponent implements OnInit {
  private profileForm: FormGroup;

  constructor(private _auth: AuthService,
              private _router: Router) {}
  ngOnInit(): void {
    // TODO: bug not working -cannot read property 'firstName' of undefined
    const firstName = new FormControl(this._auth.currentUser.firstName);
    const lastName = new FormControl(this._auth.currentUser.lastName);

    this.profileForm = new FormGroup({
      lastName: lastName,
      firstName: firstName
    })
  }

  saveProfile(formValues) {
    this._auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    // this._router.navigate(['events'])
  }
  cancel() {
    // this._router.navigate(['events'])
  }
}