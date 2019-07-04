import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface Motto {
  id: number;
  content: string;
  who?: string;
}

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
