import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APPService {

  public title = 'Template';

  public desc = 'Web APP: Angular client + Rester server.';

  constructor() { console.log('AppService'); }

}
