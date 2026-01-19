import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from '../database/models/role.model';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule { }
