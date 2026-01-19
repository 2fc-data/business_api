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
import { OutcomesService } from './outcomes.service';
import { CreateOutcomeDto } from './dto/create-outcome.dto';
import { UpdateOutcomeDto } from './dto/update-outcome.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('outcomes')
@UseGuards(RolesGuard)
export class OutcomesController {
  constructor(private readonly outcomesService: OutcomesService) { }

  @Post()
  @Roles('settings.manage')
  create(@Body() createOutcomeDto: CreateOutcomeDto) {
    return this.outcomesService.create(createOutcomeDto);
  }

  @Get()
  @Roles('settings.manage', 'causes.view')
  findAll() {
    return this.outcomesService.findAll();
  }

  @Get(':id')
  @Roles('settings.manage')
  findOne(@Param('id') id: string) {
    return this.outcomesService.findOne(+id);
  }

  @Patch(':id')
  @Roles('settings.manage')
  update(@Param('id') id: string, @Body() updateOutcomeDto: UpdateOutcomeDto) {
    return this.outcomesService.update(+id, updateOutcomeDto);
  }

  @Delete(':id')
  @Roles('settings.manage')
  remove(@Param('id') id: string) {
    return this.outcomesService.remove(+id);
  }
}
