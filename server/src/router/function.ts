import { Response } from '../@types';

interface ResponseInput<T> {
  status?: {
    id?: string;
    code?: number;
    message?: string;
  };
  content?: T;
}

export function generateResponse<T = any>(response: ResponseInput<T>): Response<T> {
  const status = response.status;
  const content = response.content;
  return {
    status: {
      id: (status && status.id) || String(Date.now()),
      code: (status && status.code) || content ? 0 : 1,
      message: (status && status.message) || 'No message.',
      date: new Date().toISOString()
    },
    content
  };
}
