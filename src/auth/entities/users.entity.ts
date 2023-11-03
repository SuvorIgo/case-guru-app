import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'varchar' })
  login!: string;

  @Column({ type: 'varchar' })
  fio: string;

  @Column({ type: 'varchar' })
  hash_password: string;
}
