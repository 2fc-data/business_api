import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCourtDto } from './dto/create-court.dto';
import { UpdateCourtDto } from './dto/update-court.dto';
import { Court } from '../database/models/court.model';

@Injectable()
export class CourtsService {
  constructor(
    @InjectModel(Court)
    private courtModel: typeof Court,
  ) { }

  create(createCourtDto: CreateCourtDto) {
    return this.courtModel.create({ ...createCourtDto });
  }

  findAll() {
    return this.courtModel.findAll();
  }

  findOne(id: number) {
    return this.courtModel.findByPk(id);
  }

  update(id: number, updateCourtDto: UpdateCourtDto) {
    return this.courtModel.update(updateCourtDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.courtModel.destroy({
      where: { id },
    });
  }
}
