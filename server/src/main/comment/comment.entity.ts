import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface Comment {
  id: number;
  belong: number; // hero.id
  content: string;
  date: number;
  dislike: number;
  like: number;
  reply?: number; // comment.id
}

@Entity('comment')
export class CommentEntity extends BaseEntity implements Comment {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  belong!: number;

  @Column()
  content!: string;

  @Column({
    default: 0
  })
  date!: number;

  @Column({
    default: 0
  })
  dislike!: number;

  @Column({
    default: 0
  })
  like!: number;

  @Column({
    nullable: true
  })
  reply?: number;

}
