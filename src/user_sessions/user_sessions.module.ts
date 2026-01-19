import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserSessionsService } from './user_sessions.service';
import { UserSessionsController } from './user_sessions.controller';
import { UserSession } from '../database/models/user_session.model';

@Module({
  imports: [SequelizeModule.forFeature([UserSession])],
  controllers: [UserSessionsController],
  providers: [UserSessionsService],
})
export class UserSessionsModule { }
