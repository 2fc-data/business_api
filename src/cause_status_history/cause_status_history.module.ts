import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CauseStatusHistoryService } from './cause_status_history.service';
import { CauseStatusHistoryController } from './cause_status_history.controller';
import { CauseStatusHistory } from '../database/models/cause_status_history.model';

@Module({
  imports: [SequelizeModule.forFeature([CauseStatusHistory])],
  controllers: [CauseStatusHistoryController],
  providers: [CauseStatusHistoryService],
})
export class CauseStatusHistoryModule { }
