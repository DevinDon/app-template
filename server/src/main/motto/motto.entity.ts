import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Motto } from './motto.model';

@Entity('motto')
export class MottoEntity extends BaseEntity implements Motto {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @Column({
    nullable: true
  })
  who?: string;

}
