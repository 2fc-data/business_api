import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCauseDto } from './dto/create-cause.dto';
import { UpdateCauseDto } from './dto/update-cause.dto';
import { Cause } from '../database/models/cause.model';

@Injectable()
export class CausesService {
  constructor(
    @InjectModel(Cause)
    private causeModel: typeof Cause,
  ) { }

  create(createCauseDto: CreateCauseDto) {
    return this.causeModel.create({ ...createCauseDto });
  }

  findAll() {
    return this.causeModel.findAll();
  }

  findOne(id: number) {
    return this.causeModel.findByPk(id);
  }

  update(id: number, updateCauseDto: UpdateCauseDto) {
    return this.causeModel.update(updateCauseDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.causeModel.destroy({
      where: { id },
    });
  }
}
