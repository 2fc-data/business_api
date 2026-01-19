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
import { StatusesService } from './statuses.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('statuses')
@UseGuards(RolesGuard)
export class StatusesController {
  constructor(private readonly statusesService: StatusesService) { }

  @Post()
  @Roles('settings.manage')
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusesService.create(createStatusDto);
  }

  @Get()
  @Roles('settings.manage', 'causes.view')
  findAll() {
    return this.statusesService.findAll();
  }

  @Get(':id')
  @Roles('settings.manage')
  findOne(@Param('id') id: string) {
    return this.statusesService.findOne(+id);
  }

  @Patch(':id')
  @Roles('settings.manage')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusesService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  @Roles('settings.manage')
  remove(@Param('id') id: string) {
    return this.statusesService.remove(+id);
  }
}
