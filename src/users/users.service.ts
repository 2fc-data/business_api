import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../database/models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async create(createUserDto: CreateUserDto) {
    let password_hash: string | undefined;

    if (createUserDto.password) {
      const salt = await bcrypt.genSalt(10);
      password_hash = await bcrypt.hash(createUserDto.password, salt);
    }

    // Remove password from dto and add hash
    const { password, ...userData } = createUserDto;

    return this.userModel.create({
      ...userData,
      password_hash,
    });
  }

  findAll() {
    return this.userModel.findAll({
      attributes: { exclude: ['password_hash'] },
    });
  }

  findOne(id: number) {
    return this.userModel.findByPk(id, {
      attributes: { exclude: ['password_hash'] },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // Basic update logic. If password update is needed, it would be handled similarly to create.
    return this.userModel.update(updateUserDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.userModel.destroy({
      where: { id },
    });
  }
}
