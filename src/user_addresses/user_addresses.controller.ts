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
import { UserAddressesService } from './user_addresses.service';
import { CreateUserAddressDto } from './dto/create-user_address.dto';
import { UpdateUserAddressDto } from './dto/update-user_address.dto';
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('user-addresses')
@UseGuards(RulesGuard)
export class UserAddressesController {
  constructor(private readonly userAddressesService: UserAddressesService) { }

  @Post()
  @Rules('users.edit')
  create(@Body() createUserAddressDto: CreateUserAddressDto) {
    return this.userAddressesService.create(createUserAddressDto);
  }

  @Get()
  @Rules('users.view')
  findAll() {
    return this.userAddressesService.findAll();
  }

  @Get(':id')
  @Rules('users.view')
  findOne(@Param('id') id: string) {
    return this.userAddressesService.findOne(+id);
  }

  @Patch(':id')
  @Rules('users.edit')
  update(
    @Param('id') id: string,
    @Body() updateUserAddressDto: UpdateUserAddressDto,
  ) {
    return this.userAddressesService.update(+id, updateUserAddressDto);
  }

  @Delete(':id')
  @Rules('users.edit')
  remove(@Param('id') id: string) {
    return this.userAddressesService.remove(+id);
  }
}
