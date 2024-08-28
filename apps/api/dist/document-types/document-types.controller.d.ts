import { DocumentTypesService } from './document-types.service';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
export declare class DocumentTypesController {
    private readonly documentTypesService;
    constructor(documentTypesService: DocumentTypesService);
    create(createDocumentTypeDto: CreateDocumentTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDocumentTypeDto: UpdateDocumentTypeDto): string;
    remove(id: string): string;
}
