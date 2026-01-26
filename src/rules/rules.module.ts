import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RulesService } from './rules.service';
import { RulesController } from './rules.controller';
import { Rule } from '../database/models/rule.model';

@Module({
  imports: [SequelizeModule.forFeature([Rule])],
  controllers: [RulesController],
  providers: [RulesService],
})
export class RulesModule { }
