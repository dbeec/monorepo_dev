import { Company } from 'src/modules/companies/entities/company.entity';
import { DocumentType } from 'src/modules/document-types/entities/document-type.entity';
import { City } from 'src/modules/locations/cities/entities/city.entity';
import { Department } from 'src/modules/locations/departments/entities/department.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @ManyToOne(() => DocumentType, (documentType) => documentType.users, {
    eager: true,
  })
  @JoinColumn({ name: 'documentTypeId' })
  typeDocument: DocumentType;

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

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Role, (role) => role.user, { eager: true })
  @JoinColumn({ name: 'roleId' })
  roles: Role;

  @ManyToOne(() => Company, (company) => company.users, { eager: true })
  @JoinColumn({ name: 'companyId' })
  company: Company;

  @ManyToOne(() => Department, (department) => department.users, { eager: true })
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @ManyToOne(() => City, (city) => city.users, { eager: true })
  @JoinColumn({ name: 'cityId' })
  city: City;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
