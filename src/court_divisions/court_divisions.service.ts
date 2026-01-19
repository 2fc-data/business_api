import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCourtDivisionDto } from './dto/create-court_division.dto';
import { UpdateCourtDivisionDto } from './dto/update-court_division.dto';
import { CourtDivision } from '../database/models/court_division.model';

@Injectable()
export class CourtDivisionsService {
  constructor(
    @InjectModel(CourtDivision)
    private courtDivisionModel: typeof CourtDivision,
  ) { }

  create(createCourtDivisionDto: CreateCourtDivisionDto) {
    return this.courtDivisionModel.create({ ...createCourtDivisionDto });
  }

  findAll() {
    return this.courtDivisionModel.findAll();
  }

  findOne(id: number) {
    return this.courtDivisionModel.findByPk(id);
  }

  update(id: number, updateCourtDivisionDto: UpdateCourtDivisionDto) {
    return this.courtDivisionModel.update(updateCourtDivisionDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.courtDivisionModel.destroy({
      where: { id },
    });
  }
}
