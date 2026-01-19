import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import { Status } from '../database/models/status.model';

@Module({
  imports: [SequelizeModule.forFeature([Status])],
  controllers: [StatusesController],
  providers: [StatusesService],
})
export class StatusesModule { }
