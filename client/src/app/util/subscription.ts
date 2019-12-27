import { Subscription } from 'rxjs';

export function destory(subscriptions: Subscription[]) {
  subscriptions.forEach(v => v.unsubscribe());
}
