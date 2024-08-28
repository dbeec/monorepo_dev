import { Company } from 'src/modules/companies/entities/company.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
export declare class User {
    userId: number;
    document_type: string;
    document: string;
    firstname: string;
    middlename: string;
    firstsurname: string;
    secondsurname: string;
    email: string;
    phone: string;
    password: string;
    roles: Role[];
    company: Company;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
