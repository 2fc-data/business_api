import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserAddressesService } from './user_addresses.service';
import { UserAddressesController } from './user_addresses.controller';
import { UserAddress } from '../database/models/user_address.model';

@Module({
  imports: [SequelizeModule.forFeature([UserAddress])],
  controllers: [UserAddressesController],
  providers: [UserAddressesService],
})
export class UserAddressesModule { }
