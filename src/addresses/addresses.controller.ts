import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('addresses')
@UseGuards(RolesGuard)
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) { }

  @Post()
  @Roles('users.edit') // Contextual: Creating an address usually relates to a user
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @Get()
  @Roles('users.view')
  findAll() {
    return this.addressesService.findAll();
  }

  @Get(':id')
  @Roles('users.view')
  findOne(@Param('id') id: string) {
    return this.addressesService.findOne(+id);
  }

  @Patch(':id')
  @Roles('users.edit')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressesService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  @Roles('users.edit')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(+id);
  }
}
