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
import { CauseStageHistoryService } from './cause_stage_history.service';
import { CreateCauseStageHistoryDto } from './dto/create-cause_stage_history.dto';
import { UpdateCauseStageHistoryDto } from './dto/update-cause_stage_history.dto';
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('cause-stage-history')
@UseGuards(RulesGuard)
export class CauseStageHistoryController {
  constructor(
    private readonly causeStageHistoryService: CauseStageHistoryService,
  ) { }

  @Post()
  @Rules('causes.edit')
  create(
    @Body() createCauseStageHistoryDto: CreateCauseStageHistoryDto,
  ) {
    return this.causeStageHistoryService.create(createCauseStageHistoryDto);
  }

  @Get()
  @Rules('causes.view')
  findAll() {
    return this.causeStageHistoryService.findAll();
  }

  @Get(':id')
  @Rules('causes.view')
  findOne(@Param('id') id: string) {
    return this.causeStageHistoryService.findOne(+id);
  }

  @Patch(':id')
  @Rules('causes.edit')
  update(
    @Param('id') id: string,
    @Body() updateCauseStageHistoryDto: UpdateCauseStageHistoryDto,
  ) {
    return this.causeStageHistoryService.update(
      +id,
      updateCauseStageHistoryDto,
    );
  }

  @Delete(':id')
  @Rules('causes.edit')
  remove(@Param('id') id: string) {
    return this.causeStageHistoryService.remove(+id);
  }
}
