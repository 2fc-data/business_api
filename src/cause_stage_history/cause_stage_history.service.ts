import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCauseStageHistoryDto } from './dto/create-cause_stage_history.dto';
import { UpdateCauseStageHistoryDto } from './dto/update-cause_stage_history.dto';
import { CauseStageHistory } from '../database/models/cause_stage_history.model';

@Injectable()
export class CauseStageHistoryService {
  constructor(
    @InjectModel(CauseStageHistory)
    private causeStageHistoryModel: typeof CauseStageHistory,
  ) { }

  create(createCauseStageHistoryDto: CreateCauseStageHistoryDto) {
    return this.causeStageHistoryModel.create({
      ...createCauseStageHistoryDto,
    });
  }

  findAll() {
    return this.causeStageHistoryModel.findAll();
  }

  findOne(id: number) {
    return this.causeStageHistoryModel.findByPk(id);
  }

  update(
    id: number,
    updateCauseStageHistoryDto: UpdateCauseStageHistoryDto,
  ) {
    return this.causeStageHistoryModel.update(
      updateCauseStageHistoryDto,
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.causeStageHistoryModel.destroy({
      where: { id },
    });
  }
}
