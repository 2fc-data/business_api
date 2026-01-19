import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserSessionDto } from './dto/create-user_session.dto';
import { UpdateUserSessionDto } from './dto/update-user_session.dto';
import { UserSession } from '../database/models/user_session.model';

@Injectable()
export class UserSessionsService {
  constructor(
    @InjectModel(UserSession)
    private userSessionModel: typeof UserSession,
  ) { }

  create(createUserSessionDto: CreateUserSessionDto) {
    return this.userSessionModel.create({ ...createUserSessionDto });
  }

  findAll() {
    return this.userSessionModel.findAll();
  }

  findOne(id: number) {
    return this.userSessionModel.findByPk(id);
  }

  update(id: number, updateUserSessionDto: UpdateUserSessionDto) {
    return this.userSessionModel.update(updateUserSessionDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.userSessionModel.destroy({
      where: { id },
    });
  }
}
