import { CORSHandler, Rester } from '@rester/core';
import { CommentController } from './comment/comment.controller';
import { CommentEntity } from './comment/comment.entity';
import { HeroController } from './hero/hero.controller';
import { HeroEntity } from './hero/hero.entity';

const rester = new Rester()
  .configControllers
  .add(CommentController, HeroController)
  .end()
  .configDatabase
  .setType('sqlite')
  .setDatabase('sqlite.db')
  .setEntities([CommentEntity, HeroEntity])
  .setLogging(true)
  .setSynchronize(true)
  .end()
  .configHandlers
  .add(CORSHandler)
  .end()
  .listen();
