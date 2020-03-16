import { CORSHandler, Rester } from '@rester/core';
import { MottoView } from './motto/motto.view';
import { VersionView } from './version/version.view';

const rester = new Rester()
  .configViews
  .add(MottoView, VersionView)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
