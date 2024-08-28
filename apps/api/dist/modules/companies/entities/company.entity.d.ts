import { User } from 'src/modules/users/entities/user.entity';
export declare class Company {
    companyId: number;
    name_company: string;
    users: User[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
