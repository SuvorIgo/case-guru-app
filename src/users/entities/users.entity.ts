import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'varchar' })
  login!: string;

  @Column({ type: 'varchar' })
  fio: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  apiToken: string;
}
