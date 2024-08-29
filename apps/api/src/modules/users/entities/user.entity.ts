import { Company } from 'src/modules/companies/entities/company.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  document_type: string;

  @Column({ unique: true })
  document: string;

  @Column()
  firstname: string;

  @Column({ nullable: true })
  middlename: string;

  @Column()
  firstsurname: string;

  @Column({ nullable: true })
  secondsurname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @OneToMany(() => Role, (role) => role.user)
  @JoinColumn()
  roles: Role[];

  @ManyToMany(() => Company, (company) => company.users)
  company: Company;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
