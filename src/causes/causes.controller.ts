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
import { CausesService } from './causes.service';
import { CreateCauseDto } from './dto/create-cause.dto';
import { UpdateCauseDto } from './dto/update-cause.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('causes')
@UseGuards(RolesGuard)
export class CausesController {
  constructor(private readonly causesService: CausesService) { }

  @Post()
  @Roles('causes.create')
  create(@Body() createCauseDto: CreateCauseDto) {
    return this.causesService.create(createCauseDto);
  }

  @Get()
  @Roles('causes.view')
  findAll() {
    return this.causesService.findAll();
  }

  @Get(':id')
  @Roles('causes.view')
  findOne(@Param('id') id: string) {
    return this.causesService.findOne(+id);
  }

  @Patch(':id')
  @Roles('causes.edit')
  update(@Param('id') id: string, @Body() updateCauseDto: UpdateCauseDto) {
    return this.causesService.update(+id, updateCauseDto);
  }

  @Delete(':id')
  @Roles('causes.delete')
  remove(@Param('id') id: string) {
    return this.causesService.remove(+id);
  }
}
