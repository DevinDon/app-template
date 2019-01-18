import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {

  /** User ID. */
  @PrimaryGeneratedColumn({
    type: 'bigint',
    comment: 'User ID'
  })
  id: number;

  /** User name. */
  @Column({
    type: 'text',
    comment: 'User name'
  })
  name: string;

  /** User email. */
  @Column({
    type: 'text',
    comment: 'User email'
  })
  email: string;

}
