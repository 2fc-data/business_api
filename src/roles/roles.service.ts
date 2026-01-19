import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from '../database/models/role.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private roleModel: typeof Role,
  ) { }

  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create({ ...createRoleDto });
  }

  findAll() {
    return this.roleModel.findAll();
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleModel.update(updateRoleDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.roleModel.destroy({
      where: { id },
    });
  }
}
