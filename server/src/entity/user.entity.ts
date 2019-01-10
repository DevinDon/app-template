import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {

  /** User ID. */
  @PrimaryGeneratedColumn({
    type: 'bigint',
    unsigned: true,
    comment: 'User ID.'
  })
  id: number;

  /** User name. */
  @Column({
    type: 'char',
    length: 64,
    nullable: false,
    comment: 'User name'
  })
  name: string;

  /** User email. */
  @Column({
    type: 'char',
    length: 64,
    nullable: true,
    comment: 'User email'
  })
  email: string;

}
