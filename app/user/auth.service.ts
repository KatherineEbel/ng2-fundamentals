import {Injectable} from '@angular/core'
import {IUser} from './user.model'
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  currentUser: IUser

  constructor(private _http: Http) {}
  loginUser(userName: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let loginInfo = { username: userName, password: password };
    return this._http.post('/api/login', loginInfo, options)
      .do(res => {
        if (res) {
          this.currentUser = <IUser>res.json().user;
        }
      })
      .catch(err => Observable.of(false));
  }

  isAuthenticated() {
    return !!this.currentUser
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  checkAuthenticationStatus () {
    return this._http.get('/api/currentIdentity')
      .map((res: any) => {
        console.log(res._body);
        return res._body ? res.json() : {};
      })
      .do(currentUser => {
        if (!!currentUser.userName) {
          this.currentUser = currentUser
        }
      })
      .subscribe();

  }

  logout () {
    this.currentUser = undefined;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/logout', {}, options);
  }
}
