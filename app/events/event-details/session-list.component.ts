import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../shared/session.model";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  filteredSessions: ISession[] = [];

  constructor(private _auth: AuthService,
              private _voterService: VoterService) {}
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.filteredSessions.sort(this.sortByNameAsc)
        : this.filteredSessions.sort(this.sortByVotesDesc);
    }
  }

  private sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
  }

  private sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }
  private filterSessions(filter: string) {
    if (filter === 'all') {
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions
        .filter(s => s.level.toLowerCase() === filter);
    }
  }

  toggleVote (session: ISession) {
    const voter = this._auth.currentUser.username;
    if (this._voterService.userHasVoted(session, voter)) {
      this._voterService.deleteVoter(this.eventId, session, voter);
    } else {
      this._voterService.addVoter(this.eventId, session, voter)
    }
    if (this.sortBy === 'votes') {
      this.filteredSessions.sort(this.sortByVotesDesc);
    }
  }

  userHasVoted (session: ISession) {
    return this._voterService.userHasVoted(session, this._auth.currentUser.username)
  }
}