import { CORSHandler, Rester } from '@rester/core';
import { VersionView } from './version/version.view';

const rester = new Rester()
  .configViews
  .add(VersionView)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
