import { Company } from 'src/modules/companies/entities/company.entity';
import { DocumentType } from 'src/modules/document-types/entities/document-type.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
export declare class User {
    userId: string;
    typeDocument: DocumentType;
    document: string;
    firstname: string;
    middlename: string;
    firstsurname: string;
    secondsurname: string;
    email: string;
    phone: string;
    password: string;
    isActive: boolean;
    roles: Role;
    company: Company;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
