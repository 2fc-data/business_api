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
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('causes')
@UseGuards(RulesGuard)
export class CausesController {
  constructor(private readonly causesService: CausesService) { }

  @Post()
  @Rules('causes.create')
  create(@Body() createCauseDto: CreateCauseDto) {
    return this.causesService.create(createCauseDto);
  }

  @Get()
  @Rules('causes.view')
  findAll() {
    return this.causesService.findAll();
  }

  @Get(':id')
  @Rules('causes.view')
  findOne(@Param('id') id: string) {
    return this.causesService.findOne(+id);
  }

  @Patch(':id')
  @Rules('causes.edit')
  update(@Param('id') id: string, @Body() updateCauseDto: UpdateCauseDto) {
    return this.causesService.update(+id, updateCauseDto);
  }

  @Delete(':id')
  @Rules('causes.delete')
  remove(@Param('id') id: string) {
    return this.causesService.remove(+id);
  }
}
