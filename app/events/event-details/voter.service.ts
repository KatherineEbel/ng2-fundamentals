import { Injectable } from '@angular/core';
import { ISession } from '../shared/session.model';

@Injectable()
export class VoterService {

  deleteVoter (session: ISession, voter: string) {
    session.voters = session.voters.filter(v => v !== voter)
  }

  addVoter (session: ISession, voter: string) {
    session.voters.push(voter)
  }

  userHasVoted (session: ISession, voter: string) {
    return session.voters.some(v => v === voter);
  }
}