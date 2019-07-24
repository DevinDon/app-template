import { CORSHandler, Rester } from '@rester/core';
import { MottoView } from './motto/motto.view';

const rester = new Rester()
  .configViews
  .add(MottoView)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
