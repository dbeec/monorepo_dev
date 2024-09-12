import { Column, Entity, OneToMany } from 'typeorm';
import { City } from '../../cities/entities/city.entity';

@Entity({ name: 'departments' })
export class Department {
  @Column({ primary: true, nullable: false })
  dane_cod_department: number;

  @Column({ length: 50 })
  department: string;

  @OneToMany(() => City, (city) => city.department)
  city: City[];
}
