import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from '../database/models/address.model';

@Injectable()
export class AddressesService {
  constructor(
    @InjectModel(Address)
    private addressModel: typeof Address,
  ) { }

  create(createAddressDto: CreateAddressDto) {
    return this.addressModel.create({ ...createAddressDto });
  }

  findAll() {
    return this.addressModel.findAll();
  }

  findOne(id: number) {
    return this.addressModel.findByPk(id);
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.addressModel.update(updateAddressDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.addressModel.destroy({
      where: { id },
    });
  }
}
