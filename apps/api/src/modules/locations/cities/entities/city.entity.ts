import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Department } from '../../departments/entities/department.entity';

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
}
