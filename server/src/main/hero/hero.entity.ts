import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface Hero {
  id: number;
  name: string;
  description?: string;
  like: number;
}

@Entity('hero')
export class HeroEntity extends BaseEntity implements Hero {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    default: ''
  })
  description!: string;

  @Column({
    default: 0
  })
  like!: number;

}
