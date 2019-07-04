import { CORSHandler, Rester } from '@rester/core';
import { MottoController } from './motto/motto.controller';

const rester = new Rester()
  .configControllers
  .add(MottoController)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
