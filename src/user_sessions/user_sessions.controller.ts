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
import { UserSessionsService } from './user_sessions.service';
import { CreateUserSessionDto } from './dto/create-user_session.dto';
import { UpdateUserSessionDto } from './dto/update-user_session.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('user-sessions')
@UseGuards(RolesGuard)
export class UserSessionsController {
  constructor(private readonly userSessionsService: UserSessionsService) { }

  @Post()
  @Roles('users.edit')
  create(@Body() createUserSessionDto: CreateUserSessionDto) {
    return this.userSessionsService.create(createUserSessionDto);
  }

  @Get()
  @Roles('users.view')
  findAll() {
    return this.userSessionsService.findAll();
  }

  @Get(':id')
  @Roles('users.view')
  findOne(@Param('id') id: string) {
    return this.userSessionsService.findOne(+id);
  }

  @Patch(':id')
  @Roles('users.edit')
  update(
    @Param('id') id: string,
    @Body() updateUserSessionDto: UpdateUserSessionDto,
  ) {
    return this.userSessionsService.update(+id, updateUserSessionDto);
  }

  @Delete(':id')
  @Roles('users.edit')
  remove(@Param('id') id: string) {
    return this.userSessionsService.remove(+id);
  }
}
