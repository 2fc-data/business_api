import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserAddressDto } from './dto/create-user_address.dto';
import { UpdateUserAddressDto } from './dto/update-user_address.dto';
import { UserAddress } from '../database/models/user_address.model';

@Injectable()
export class UserAddressesService {
  constructor(
    @InjectModel(UserAddress)
    private userAddressModel: typeof UserAddress,
  ) { }

  create(createUserAddressDto: CreateUserAddressDto) {
    return this.userAddressModel.create({ ...createUserAddressDto });
  }

  findAll() {
    return this.userAddressModel.findAll();
  }

  findOne(id: number) {
    return this.userAddressModel.findByPk(id);
  }

  update(id: number, updateUserAddressDto: UpdateUserAddressDto) {
    return this.userAddressModel.update(updateUserAddressDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.userAddressModel.destroy({
      where: { id },
    });
  }
}
