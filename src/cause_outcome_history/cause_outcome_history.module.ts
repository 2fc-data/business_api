import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CauseOutcomeHistoryService } from './cause_outcome_history.service';
import { CauseOutcomeHistoryController } from './cause_outcome_history.controller';
import { CauseOutcomeHistory } from '../database/models/cause_outcome_history.model';

@Module({
  imports: [SequelizeModule.forFeature([CauseOutcomeHistory])],
  controllers: [CauseOutcomeHistoryController],
  providers: [CauseOutcomeHistoryService],
})
export class CauseOutcomeHistoryModule { }
