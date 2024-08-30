import { User } from 'src/modules/users/entities/user.entity';
export declare class Company {
    companyId: string;
    nit: string;
    name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    users: User[];
}
