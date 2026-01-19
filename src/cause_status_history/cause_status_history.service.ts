import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCauseStatusHistoryDto } from './dto/create-cause_status_history.dto';
import { UpdateCauseStatusHistoryDto } from './dto/update-cause_status_history.dto';
import { CauseStatusHistory } from '../database/models/cause_status_history.model';

@Injectable()
export class CauseStatusHistoryService {
  constructor(
    @InjectModel(CauseStatusHistory)
    private causeStatusHistoryModel: typeof CauseStatusHistory,
  ) { }

  create(createCauseStatusHistoryDto: CreateCauseStatusHistoryDto) {
    return this.causeStatusHistoryModel.create({
      ...createCauseStatusHistoryDto,
    });
  }

  findAll() {
    return this.causeStatusHistoryModel.findAll();
  }

  findOne(id: number) {
    return this.causeStatusHistoryModel.findByPk(id);
  }

  update(
    id: number,
    updateCauseStatusHistoryDto: UpdateCauseStatusHistoryDto,
  ) {
    return this.causeStatusHistoryModel.update(
      updateCauseStatusHistoryDto,
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.causeStatusHistoryModel.destroy({
      where: { id },
    });
  }
}
