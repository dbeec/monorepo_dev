import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentType } from './entities/document-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentTypesService {
  constructor(
    @InjectRepository(DocumentType)
    private readonly documentTypeRepository: Repository<DocumentType>
  ) { }
  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    const documentType = await this.documentTypeRepository.findOneBy({ type: createDocumentTypeDto.type })
    if (documentType) {
      throw new ConflictException("Document Type already exists")
    }
    this.documentTypeRepository.create(createDocumentTypeDto)
    return await this.documentTypeRepository.save(createDocumentTypeDto)
  }

  async findAll() {
    return await this.documentTypeRepository.find()
  }

  async findOne(id: number) {
    const documentType = await this.documentTypeRepository.findOneBy({ document_typeId: id })
    if (!documentType) {
      throw new NotFoundException(`Document Type ${id} not found`)
    }
    return documentType
  }

  async update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    const existDocumentType = await this.documentTypeRepository.findOneBy({ document_typeId: id })
    if (!existDocumentType) {
      throw new NotFoundException(`Document Type ${id} not found`)
    }
    const documentType = await this.documentTypeRepository.findOneBy({ type: updateDocumentTypeDto.type })
    if (documentType) {
      throw new ConflictException("Document Type already exists")
    }
    return await this.documentTypeRepository.update(id, updateDocumentTypeDto)
  }

  async remove(id: number) {
    const existDocumentType = await this.documentTypeRepository.findOneBy({ document_typeId: id })
    if (!existDocumentType) {
      throw new NotFoundException(`Document Type ${id} not found`)
    }
    return await this.documentTypeRepository.softDelete(id)
  }
}
