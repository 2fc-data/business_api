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
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('cause-outcome-history')
@UseGuards(RulesGuard)
export class CauseOutcomeHistoryController {
  constructor(
    private readonly causeOutcomeHistoryService: CauseOutcomeHistoryService,
  ) { }

  @Post()
  @Rules('causes.edit')
  create(
    @Body() createCauseOutcomeHistoryDto: CreateCauseOutcomeHistoryDto,
  ) {
    return this.causeOutcomeHistoryService.create(createCauseOutcomeHistoryDto);
  }

  @Get()
  @Rules('causes.view')
  findAll() {
    return this.causeOutcomeHistoryService.findAll();
  }

  @Get(':id')
  @Rules('causes.view')
  findOne(@Param('id') id: string) {
    return this.causeOutcomeHistoryService.findOne(+id);
  }

  @Patch(':id')
  @Rules('causes.edit')
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
  @Rules('causes.edit')
  remove(@Param('id') id: string) {
    return this.causeOutcomeHistoryService.remove(+id);
  }
}
