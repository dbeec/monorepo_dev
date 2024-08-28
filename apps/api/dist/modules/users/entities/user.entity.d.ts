import { Role } from 'src/modules/roles/entities/role.entity';
export declare class User {
    id: number;
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
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
