import { User } from 'src/modules/users/entities/user.entity';
export declare class Role {
    roleId: number;
    name_rol: string;
    user: User;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
