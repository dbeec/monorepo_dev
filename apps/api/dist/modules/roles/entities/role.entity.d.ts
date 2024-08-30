import { User } from 'src/modules/users/entities/user.entity';
export declare class Role {
    roleId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: User[];
}
