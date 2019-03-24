import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Statistic extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text'
  })
  how: string;

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
  who: string;

}

export default Statistic;
