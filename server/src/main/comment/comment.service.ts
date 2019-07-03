import { Service } from '@rester/core';
import { Comment, CommentEntity } from './comment.entity';

@Service()
export class CommentService {

  add(comment: Comment): Promise<Comment | undefined> {
    return CommentEntity
      .insert(comment)
      .then(result => result.identifiers[0] ? comment : undefined);
  }

  count(belong: number): Promise<number> {
    return CommentEntity
      .count({ where: { belong } });
  }

  async counts(belongs: number[]): Promise<{ [index: number]: number }> {
    const result: { [index: number]: number } = [];
    for await (const belong of belongs) {
      result[belong] = await CommentEntity.count({ where: { belong } });
    }
    return result;
  }

  getAboutHero(belong: number, offset: number): Promise<Comment[]> {
    return CommentEntity
      .find({ where: { belong }, take: 10, skip: offset, order: { date: 'DESC' } });
  }

  async getAboutReply(reply: number, offset: number): Promise<Comment[]> {
    const origin = await CommentEntity.findOne(reply);
    if (origin) {
      const result = await CommentEntity
        .find({ where: { reply }, take: 10, skip: offset, order: { date: 'DESC' } });
      result.unshift(origin);
      return result;
    } else {
      return [];
    }
  }

  async getReplyOrigin(id: number): Promise<Comment[]> {
    const result: Comment[] = [];
    do {
      const one = await CommentEntity.findOne(id);
      if (one) {
        result.push(one);
        id = one.reply!;
      } else {
        break;
      }
    } while (result.length < 10 && id);
    return result;
  }

  async like(id: number): Promise<number> {
    await CommentEntity
      .createQueryBuilder()
      .update()
      .set({
        like: () => '"like" + 1'
      })
      .where('id = :id', { id })
      .execute();
    return CommentEntity
      .findOne(id)
      .then(result => result ? result.like : -1);
  }

}
