import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CausesService } from './causes.service';
import { CausesController } from './causes.controller';
import { Cause } from '../database/models/cause.model';

@Module({
  imports: [SequelizeModule.forFeature([Cause])],
  controllers: [CausesController],
  providers: [CausesService],
})
export class CausesModule { }
