import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name_rol: string;

  @ManyToOne(() => User, (user) => user.roles)
  user: User;

  @Column()
  create_at: Date;

  @Column()
  update_at: Date;

  @Column()
  delete_at: Date;
}
