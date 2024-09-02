import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentType } from './entities/document-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentTypesService {
  constructor(
    @InjectRepository(DocumentType)
    private readonly documentTypeRepository: Repository<DocumentType>,
  ) {}
  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    try {
      const documentType = await this.documentTypeRepository.findOneBy({
        type: createDocumentTypeDto.type,
      });
      if (documentType) {
        throw new ConflictException('Document Type already exists');
      }
      this.documentTypeRepository.create(createDocumentTypeDto);
      return await this.documentTypeRepository.save(createDocumentTypeDto);
    } catch (error) {
      console.error('Error creating document type:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.documentTypeRepository.find();
    } catch (error) {
      console.error('Error finding document type:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const documentType = await this.documentTypeRepository.findOneBy({
        document_typeId: id,
      });
      if (!documentType) {
        throw new NotFoundException(`Document Type ${id} not found`);
      }
      return documentType;
    } catch (error) {
      console.error('Error finding document type:', error);
      throw error;
    }
  }

  async update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    try {
      const existDocumentType = await this.documentTypeRepository.findOneBy({
        document_typeId: id,
      });
      if (!existDocumentType) {
        throw new NotFoundException(`Document Type ${id} not found`);
      }
      const documentType = await this.documentTypeRepository.findOneBy({
        type: updateDocumentTypeDto.type,
      });
      if (documentType) {
        throw new ConflictException('Document Type already exists');
      }
      return await this.documentTypeRepository.update(
        id,
        updateDocumentTypeDto,
      );
    } catch (error) {
      console.error('Error updating document type:', error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const existDocumentType = await this.documentTypeRepository.findOneBy({
        document_typeId: id,
      });
      if (!existDocumentType) {
        throw new NotFoundException(`Document Type ${id} not found`);
      }
      return await this.documentTypeRepository.softDelete(id);
    } catch (error) {
      console.error('Error deleting document type:', error);
      throw error;
    }
  }
}
