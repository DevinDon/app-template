import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Statistic extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text'
  })
  who: string;

  @Column({
    type: 'timestamp'
  })
  when: string;

  @Column({
    type: 'text'
  })
  where: string;

  @Column({
    type: 'text'
  })
  how: string;

}

export default Statistic;
