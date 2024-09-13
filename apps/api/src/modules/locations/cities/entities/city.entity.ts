import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Department } from '../../departments/entities/department.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Company } from 'src/modules/companies/entities/company.entity';

@Entity({ name: 'cities' })
export class City {
  @Column({ primary: true, length: 50 })
  dane_cod_city: string;

  @Column({ length: 50 })
  city: string;

  @Column()
  departmentId: number;

  @ManyToOne(() => Department, (department) => department.city, { eager: true })
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @OneToMany(() => User, (user) => user.city)
  users: User[];

  @OneToMany(() => Company, (company) => company.city)
  company: Company[];
}
