import { Middleware } from 'koa';
import { Statistic } from '../entity';

export const statistic: Middleware = async (c, next) => {
  await next();
  await Statistic.insert({
    who: c.request.ip,
    when: new Date().toISOString(),
    where: c.request.path,
    how: c.request.method.toUpperCase()
  });
};

export default statistic;
