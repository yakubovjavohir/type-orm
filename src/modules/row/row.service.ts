import { Inject, Injectable } from '@nestjs/common';
import { CreateRowDto } from './dto/create-row.dto';
import { UpdateRowDto } from './dto/update-row.dto';
import { ID } from 'src/common/types';
import { ResData } from 'src/lib/resdata';
import { Row } from './entities/row.entity';
import { RowRepository } from './row.repository';
import { RowNotFound } from './exception/error';
import { IRowService } from './interface/user.service.interface';

@Injectable()
export class RowService implements IRowService{

  constructor(
    @Inject("IRowRepository") private readonly rowRepository:RowRepository
  ){}
 async findOne(id: ID): Promise<ResData<Row>> {
    const data = await this.rowRepository.findOne(id)

    if(!data){
      throw new RowNotFound()
    }

    return new ResData<Row>(200, "success", data)
  }
 async update(id: ID, dto: UpdateRowDto): Promise<ResData<Row>> {
  const data = await this.rowRepository.update(id,dto)
  const resdata = new ResData<Row>(200, "update", data)
  return resdata
  }
 async delete(id: ID): Promise<ResData<void>> {
  await this.findOne(id)
  await this.rowRepository.delete(id)
  const resdata = new ResData<null>(201, "deleted", null)
  return resdata
  }

  async create(dto: CreateRowDto): Promise<ResData<Row>> {
    const data = await this.rowRepository.create(dto)
    const resdata = new ResData<Row>(201, "created", data)
    return resdata
  }

  async findAll(): Promise<ResData<Row[]>> {
    const data = await this.rowRepository.findAll()
    const resdata = new ResData<Row[]>(201, "created", data)
    return resdata
  }
}
