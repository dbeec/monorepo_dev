import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
export declare class DocumentTypesService {
    create(createDocumentTypeDto: CreateDocumentTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto): string;
    remove(id: number): string;
}
