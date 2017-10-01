import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../shared/session.model";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  filteredSessions: ISession[] = [];
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
}