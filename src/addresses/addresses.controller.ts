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
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('addresses')
@UseGuards(RulesGuard)
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) { }

  @Post()
  @Rules('users.edit') // Contextual: Creating an address usually relates to a user
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @Get()
  @Rules('users.view')
  findAll() {
    return this.addressesService.findAll();
  }

  @Get(':id')
  @Rules('users.view')
  findOne(@Param('id') id: string) {
    return this.addressesService.findOne(+id);
  }

  @Patch(':id')
  @Rules('users.edit')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressesService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  @Rules('users.edit')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(+id);
  }
}
