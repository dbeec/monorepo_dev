import { City } from 'src/modules/locations/cities/entities/city.entity';
import { Department } from 'src/modules/locations/departments/entities/department.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  companyId: number;

  @Column({ unique: true })
  nit: string;

  @Column({ length: 1 })
  dv: string;

  @Column({ unique: true })
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => User, (users) => users.company)
  users: User[];

  @ManyToOne(() => Department, (departments) => departments.company, { eager: true })
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @ManyToOne(() => City, (cities) => cities.company, { eager: true })
  @JoinColumn({ name: 'cityId' })
  city: City;
}
