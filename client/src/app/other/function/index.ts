import { TrackByFunction } from '@angular/core';

export function trackBy<T = any>(property: string): TrackByFunction<T> {
  return (index: number, item: T) => item[property];
}
