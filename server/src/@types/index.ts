/** Client request, all properties are optional because you know why. */
export interface Request<T = string> {
  [index: string]: any;
}

/** Response status. */
export interface Status {
  /** Content md5 id. */
  id: string;
  /** Response code. */
  code: number;
  /** Response message. */
  message: string;
  /** Response date, ISO format. */
  date: string;
}

/** Server response. */
export interface Response<T = string> {
  /** Business status, not http status. */
  status: Status;
  /** Response content. */
  content?: T;
}
