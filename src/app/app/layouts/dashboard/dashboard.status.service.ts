import { Injectable, EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class DashboardStatusService {
  subject = new Subject();

  constructor() {}

  subscribe(onNext: any): Subscription {
    return this.subject.subscribe(onNext);
  }

  updateMoodTooltip(tooltipMsg: string) {
    this.subject.next({
      method: 'tooltipMsg',
      data: tooltipMsg,
    });
  }

  updateStatusMessage(statusMsg: string) {
    this.subject.next({
      method: 'statusMsg',
      data: statusMsg,
    });
  }
}
