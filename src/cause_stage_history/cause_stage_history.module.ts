import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CauseStageHistoryService } from './cause_stage_history.service';
import { CauseStageHistoryController } from './cause_stage_history.controller';
import { CauseStageHistory } from '../database/models/cause_stage_history.model';

@Module({
  imports: [SequelizeModule.forFeature([CauseStageHistory])],
  controllers: [CauseStageHistoryController],
  providers: [CauseStageHistoryService],
})
export class CauseStageHistoryModule { }
