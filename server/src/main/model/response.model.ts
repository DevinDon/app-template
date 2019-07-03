export interface BaseResponse<T = any> {
  status: boolean;
  message?: string;
  content?: T;
}

export function response<T>(result: BaseResponse<T>): BaseResponse<T> {
  if (!result.status) {
    result.content = undefined;
  }
  return result;
}
