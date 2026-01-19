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
import { CauseUsersService } from './cause_users.service';
import { CreateCauseUserDto } from './dto/create-cause_user.dto';
import { UpdateCauseUserDto } from './dto/update-cause_user.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('cause-users')
@UseGuards(RolesGuard)
export class CauseUsersController {
  constructor(private readonly causeUsersService: CauseUsersService) { }

  @Post()
  @Roles('causes.edit')
  create(@Body() createCauseUserDto: CreateCauseUserDto) {
    return this.causeUsersService.create(createCauseUserDto);
  }

  @Get()
  @Roles('causes.view')
  findAll() {
    return this.causeUsersService.findAll();
  }

  @Get(':id')
  @Roles('causes.view')
  findOne(@Param('id') id: string) {
    return this.causeUsersService.findOne(+id);
  }

  @Patch(':id')
  @Roles('causes.edit')
  update(
    @Param('id') id: string,
    @Body() updateCauseUserDto: UpdateCauseUserDto,
  ) {
    return this.causeUsersService.update(+id, updateCauseUserDto);
  }

  @Delete(':id')
  @Roles('causes.edit')
  remove(@Param('id') id: string) {
    return this.causeUsersService.remove(+id);
  }
}
