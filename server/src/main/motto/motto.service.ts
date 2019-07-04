import { Service } from '@rester/core';
import { Motto, MottoEntity } from './motto.entity';

@Service()
export class MottoService {

  addOne(motto: Motto): Promise<Motto | undefined> {
    return MottoEntity.insert(motto).then(v => v.identifiers[0] ? motto : undefined);
  }

  removeOneByID(id: number): Promise<boolean> {
    // sqlite delete result is always `{ raw: [] }`
    return MottoEntity.delete(id).then(v => true);
  }

  async modifyOneByID(id: number, motto: Motto): Promise<Motto | undefined> {
    await MottoEntity.update(id, motto);
    return MottoEntity.findOne(id);
  }

  getMoreByConditions(motto: Partial<Motto>): Promise<MottoEntity[]> {
    return MottoEntity.find(motto);
  }

  getOneByID(id: number): Promise<MottoEntity | undefined> {
    return MottoEntity.findOne(id);
  }

}
