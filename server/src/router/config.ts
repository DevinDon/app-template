import { Response } from '../@types';

export function generateResponse<T>(content?: T): Response<T> {
  return {
    id: Date.now(),
    status: Boolean(content),
    content
  };
}
