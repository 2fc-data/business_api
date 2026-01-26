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
import { CourtDivisionsService } from './court_divisions.service';
import { CreateCourtDivisionDto } from './dto/create-court_division.dto';
import { UpdateCourtDivisionDto } from './dto/update-court_division.dto';
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('court-divisions')
@UseGuards(RulesGuard)
export class CourtDivisionsController {
  constructor(private readonly courtDivisionsService: CourtDivisionsService) { }

  @Post()
  @Rules('settings.manage')
  create(@Body() createCourtDivisionDto: CreateCourtDivisionDto) {
    return this.courtDivisionsService.create(createCourtDivisionDto);
  }

  @Get()
  @Rules('settings.manage', 'causes.view')
  findAll() {
    return this.courtDivisionsService.findAll();
  }

  @Get(':id')
  @Rules('settings.manage')
  findOne(@Param('id') id: string) {
    return this.courtDivisionsService.findOne(+id);
  }

  @Patch(':id')
  @Rules('settings.manage')
  update(
    @Param('id') id: string,
    @Body() updateCourtDivisionDto: UpdateCourtDivisionDto,
  ) {
    return this.courtDivisionsService.update(+id, updateCourtDivisionDto);
  }

  @Delete(':id')
  @Rules('settings.manage')
  remove(@Param('id') id: string) {
    return this.courtDivisionsService.remove(+id);
  }
}
