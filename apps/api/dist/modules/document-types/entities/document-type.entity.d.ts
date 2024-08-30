import { User } from 'src/modules/users/entities/user.entity';
export declare class DocumentType {
    document_typeId: number;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    users: User[];
}
