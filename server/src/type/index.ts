/** Client request, all properties are optional because you know why. */
export interface Request<T = string> {
  [index: string]: any;
}

/** Server response. */
export interface Response<T = string> {
  /** Package id, use Date.now(). */
  id: number;
  /** Business status, not http status. */
  status: boolean;
  /** Response content. */
  content: T;
}
