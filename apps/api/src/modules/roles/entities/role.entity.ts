import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name_rol: string;

  @Column()
  create_at: Date;

  @Column()
  update_at: Date;

  @Column()
  delete_at: Date;
}
