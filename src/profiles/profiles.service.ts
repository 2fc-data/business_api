import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from '../database/models/profile.model';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile)
    private profileModel: typeof Profile,
  ) { }

  create(createProfileDto: CreateProfileDto) {
    return this.profileModel.create({ ...createProfileDto });
  }

  findAll() {
    return this.profileModel.findAll();
  }

  findOne(id: number) {
    return this.profileModel.findByPk(id);
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileModel.update(updateProfileDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.profileModel.destroy({
      where: { id },
    });
  }
}
