import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { Address } from '../database/models/address.model';

@Module({
  imports: [SequelizeModule.forFeature([Address])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule { }
