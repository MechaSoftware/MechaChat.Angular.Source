import { Injectable, EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class SettingsService {
  subject = new Subject();

  constructor() {}

  subscribe(onNext: any): Subscription {
    return this.subject.subscribe(onNext);
  }

  showSettings() {
    this.subject.next(true);
  }

  hideSettings() {
    this.subject.next(false);
  }
}
