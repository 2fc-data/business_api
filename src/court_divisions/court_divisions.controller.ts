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
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('court-divisions')
@UseGuards(RolesGuard)
export class CourtDivisionsController {
  constructor(private readonly courtDivisionsService: CourtDivisionsService) { }

  @Post()
  @Roles('settings.manage')
  create(@Body() createCourtDivisionDto: CreateCourtDivisionDto) {
    return this.courtDivisionsService.create(createCourtDivisionDto);
  }

  @Get()
  @Roles('settings.manage', 'causes.view')
  findAll() {
    return this.courtDivisionsService.findAll();
  }

  @Get(':id')
  @Roles('settings.manage')
  findOne(@Param('id') id: string) {
    return this.courtDivisionsService.findOne(+id);
  }

  @Patch(':id')
  @Roles('settings.manage')
  update(
    @Param('id') id: string,
    @Body() updateCourtDivisionDto: UpdateCourtDivisionDto,
  ) {
    return this.courtDivisionsService.update(+id, updateCourtDivisionDto);
  }

  @Delete(':id')
  @Roles('settings.manage')
  remove(@Param('id') id: string) {
    return this.courtDivisionsService.remove(+id);
  }
}
