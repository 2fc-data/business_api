import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StagesService } from './stages.service';
import { StagesController } from './stages.controller';
import { Stage } from '../database/models/stage.model';

@Module({
  imports: [SequelizeModule.forFeature([Stage])],
  controllers: [StagesController],
  providers: [StagesService],
})
export class StagesModule { }
