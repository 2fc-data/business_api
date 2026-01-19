import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourtDivisionsService } from './court_divisions.service';
import { CourtDivisionsController } from './court_divisions.controller';
import { CourtDivision } from '../database/models/court_division.model';

@Module({
  imports: [SequelizeModule.forFeature([CourtDivision])],
  controllers: [CourtDivisionsController],
  providers: [CourtDivisionsService],
})
export class CourtDivisionsModule { }
