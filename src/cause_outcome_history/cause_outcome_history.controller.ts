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
import { CauseOutcomeHistoryService } from './cause_outcome_history.service';
import { CreateCauseOutcomeHistoryDto } from './dto/create-cause_outcome_history.dto';
import { UpdateCauseOutcomeHistoryDto } from './dto/update-cause_outcome_history.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('cause-outcome-history')
@UseGuards(RolesGuard)
export class CauseOutcomeHistoryController {
  constructor(
    private readonly causeOutcomeHistoryService: CauseOutcomeHistoryService,
  ) { }

  @Post()
  @Roles('causes.edit')
  create(
    @Body() createCauseOutcomeHistoryDto: CreateCauseOutcomeHistoryDto,
  ) {
    return this.causeOutcomeHistoryService.create(createCauseOutcomeHistoryDto);
  }

  @Get()
  @Roles('causes.view')
  findAll() {
    return this.causeOutcomeHistoryService.findAll();
  }

  @Get(':id')
  @Roles('causes.view')
  findOne(@Param('id') id: string) {
    return this.causeOutcomeHistoryService.findOne(+id);
  }

  @Patch(':id')
  @Roles('causes.edit')
  update(
    @Param('id') id: string,
    @Body() updateCauseOutcomeHistoryDto: UpdateCauseOutcomeHistoryDto,
  ) {
    return this.causeOutcomeHistoryService.update(
      +id,
      updateCauseOutcomeHistoryDto,
    );
  }

  @Delete(':id')
  @Roles('causes.edit')
  remove(@Param('id') id: string) {
    return this.causeOutcomeHistoryService.remove(+id);
  }
}
