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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('users')
@UseGuards(RulesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @Rules('users.create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Rules('users.view')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Rules('users.view')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @Rules('users.edit')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Rules('users.delete')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
