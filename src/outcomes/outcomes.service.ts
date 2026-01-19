import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOutcomeDto } from './dto/create-outcome.dto';
import { UpdateOutcomeDto } from './dto/update-outcome.dto';
import { Outcome } from '../database/models/outcome.model';

@Injectable()
export class OutcomesService {
  constructor(
    @InjectModel(Outcome)
    private outcomeModel: typeof Outcome,
  ) { }

  create(createOutcomeDto: CreateOutcomeDto) {
    return this.outcomeModel.create({ ...createOutcomeDto });
  }

  findAll() {
    return this.outcomeModel.findAll();
  }

  findOne(id: number) {
    return this.outcomeModel.findByPk(id);
  }

  update(id: number, updateOutcomeDto: UpdateOutcomeDto) {
    return this.outcomeModel.update(updateOutcomeDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.outcomeModel.destroy({
      where: { id },
    });
  }
}
