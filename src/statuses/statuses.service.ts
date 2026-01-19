import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from '../database/models/status.model';

@Injectable()
export class StatusesService {
  constructor(
    @InjectModel(Status)
    private statusModel: typeof Status,
  ) { }

  create(createStatusDto: CreateStatusDto) {
    return this.statusModel.create({ ...createStatusDto });
  }

  findAll() {
    return this.statusModel.findAll();
  }

  findOne(id: number) {
    return this.statusModel.findByPk(id);
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return this.statusModel.update(updateStatusDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.statusModel.destroy({
      where: { id },
    });
  }
}
