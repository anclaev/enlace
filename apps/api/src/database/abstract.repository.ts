import { Model, Types, FilterQuery } from 'mongoose'
import { Logger, NotFoundException } from '@nestjs/common'

import { AbstractDocument } from './abstract.schema'

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger

  constructor(protected readonly model: Model<TDocument>) {}

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    })

    return (await createdDocument.save()).toJSON() as unknown as TDocument
  }

  async getOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument | null> {
    const document = this.model.findOne(filterQuery, {}, { lean: true })

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery)

      throw new NotFoundException('Document not found.')
    }

    return document
  }
}
