import { User } from 'src/modules/users/entities/user.entity';
export declare class Role {
    id: number;
    name_rol: string;
    user: User;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
