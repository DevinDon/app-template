import { Service } from '@rester/core';
import { Hero, HeroEntity } from './hero.entity';

@Service()
export class HeroService {

  add(hero: Hero): Promise<Hero | undefined> {
    return HeroEntity
      .insert(hero)
      .then(result => result.identifiers[0] ? hero : undefined);
  }

  count() {
    return HeroEntity.count();
  }

  delete(id: number) {
    return HeroEntity.delete(id);
  }

  deleteMore(ids: number[]) {
    return HeroEntity.delete(ids);
  }

  get(id: number) {
    return HeroEntity.findOne(id);
  }

  getLimit(offset: number, limit: number) {
    return HeroEntity.find({ skip: offset, take: limit, order: { id: 'ASC' } });
  }

  getMore(ids: number[]) {
    return HeroEntity.findByIds(ids, { order: { id: 'ASC' } });
  }

  getTop(total: number) {
    return HeroEntity.find({ order: { like: 'DESC' }, take: total });
  }

  getAll() {
    return HeroEntity.find({ order: { id: 'ASC' } });
  }

  async update(id: number, hero: Hero): Promise<Hero | undefined> {
    await HeroEntity.update(id, hero);
    return HeroEntity.findOne(id);
  }

  async like(id: number): Promise<number | undefined> {
    await HeroEntity
      .createQueryBuilder()
      .update()
      .set({ like: () => '"like" + 1' })
      .where('id = :id', { id })
      .execute();
    return HeroEntity
      .findOne(id)
      .then(result => result ? result.like : undefined);
  }

}
