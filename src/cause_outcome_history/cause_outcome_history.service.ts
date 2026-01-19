import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCauseOutcomeHistoryDto } from './dto/create-cause_outcome_history.dto';
import { UpdateCauseOutcomeHistoryDto } from './dto/update-cause_outcome_history.dto';
import { CauseOutcomeHistory } from '../database/models/cause_outcome_history.model';

@Injectable()
export class CauseOutcomeHistoryService {
  constructor(
    @InjectModel(CauseOutcomeHistory)
    private causeOutcomeHistoryModel: typeof CauseOutcomeHistory,
  ) { }

  create(createCauseOutcomeHistoryDto: CreateCauseOutcomeHistoryDto) {
    return this.causeOutcomeHistoryModel.create({
      ...createCauseOutcomeHistoryDto,
    });
  }

  findAll() {
    return this.causeOutcomeHistoryModel.findAll();
  }

  findOne(id: number) {
    return this.causeOutcomeHistoryModel.findByPk(id);
  }

  update(
    id: number,
    updateCauseOutcomeHistoryDto: UpdateCauseOutcomeHistoryDto,
  ) {
    return this.causeOutcomeHistoryModel.update(
      updateCauseOutcomeHistoryDto,
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.causeOutcomeHistoryModel.destroy({
      where: { id },
    });
  }
}
