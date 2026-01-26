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
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('user-sessions')
@UseGuards(RulesGuard)
export class UserSessionsController {
  constructor(private readonly userSessionsService: UserSessionsService) { }

  @Post()
  @Rules('users.edit')
  create(@Body() createUserSessionDto: CreateUserSessionDto) {
    return this.userSessionsService.create(createUserSessionDto);
  }

  @Get()
  @Rules('users.view')
  findAll() {
    return this.userSessionsService.findAll();
  }

  @Get(':id')
  @Rules('users.view')
  findOne(@Param('id') id: string) {
    return this.userSessionsService.findOne(+id);
  }

  @Patch(':id')
  @Rules('users.edit')
  update(
    @Param('id') id: string,
    @Body() updateUserSessionDto: UpdateUserSessionDto,
  ) {
    return this.userSessionsService.update(+id, updateUserSessionDto);
  }

  @Delete(':id')
  @Rules('users.edit')
  remove(@Param('id') id: string) {
    return this.userSessionsService.remove(+id);
  }
}
