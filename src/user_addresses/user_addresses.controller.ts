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
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('user-addresses')
@UseGuards(RolesGuard)
export class UserAddressesController {
  constructor(private readonly userAddressesService: UserAddressesService) { }

  @Post()
  @Roles('users.edit')
  create(@Body() createUserAddressDto: CreateUserAddressDto) {
    return this.userAddressesService.create(createUserAddressDto);
  }

  @Get()
  @Roles('users.view')
  findAll() {
    return this.userAddressesService.findAll();
  }

  @Get(':id')
  @Roles('users.view')
  findOne(@Param('id') id: string) {
    return this.userAddressesService.findOne(+id);
  }

  @Patch(':id')
  @Roles('users.edit')
  update(
    @Param('id') id: string,
    @Body() updateUserAddressDto: UpdateUserAddressDto,
  ) {
    return this.userAddressesService.update(+id, updateUserAddressDto);
  }

  @Delete(':id')
  @Roles('users.edit')
  remove(@Param('id') id: string) {
    return this.userAddressesService.remove(+id);
  }
}
