import { Injectable } from '@angular/core';
import { ISession } from '../shared/session.model';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VoterService {

  constructor(private _http: Http) {}

  deleteVoter (eventId: number, session: ISession, voter: string) {
    session.voters = session.voters.filter(v => v !== voter)
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voter}`;
    this._http.delete(url).catch(this.handleError).subscribe();
  }

  addVoter (eventId: number, session: ISession, voter: string) {
    session.voters.push(voter)
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voter}`;

    this._http.post(url, {}, options)
      .catch(this.handleError).subscribe();
  }

  userHasVoted (session: ISession, voter: string) {
    return session.voters.some(v => v === voter);
  }

  private handleError (err: Response) {
    return Observable.throw(err.statusText);
  }
}