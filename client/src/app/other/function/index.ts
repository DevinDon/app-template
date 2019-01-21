import { TrackByFunction } from '../type';

export function trackBy(property: string): TrackByFunction {
  return (index: number, item: number) => item[property];
}
