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
import { CauseStatusHistoryService } from './cause_status_history.service';
import { CreateCauseStatusHistoryDto } from './dto/create-cause_status_history.dto';
import { UpdateCauseStatusHistoryDto } from './dto/update-cause_status_history.dto';
import { RulesGuard } from '../auth/rules.guard';
import { Rules } from '../auth/rules.decorator';

@Controller('cause-status-history')
@UseGuards(RulesGuard)
export class CauseStatusHistoryController {
  constructor(
    private readonly causeStatusHistoryService: CauseStatusHistoryService,
  ) { }

  @Post()
  @Rules('causes.edit')
  create(
    @Body() createCauseStatusHistoryDto: CreateCauseStatusHistoryDto,
  ) {
    return this.causeStatusHistoryService.create(createCauseStatusHistoryDto);
  }

  @Get()
  @Rules('causes.view')
  findAll() {
    return this.causeStatusHistoryService.findAll();
  }

  @Get(':id')
  @Rules('causes.view')
  findOne(@Param('id') id: string) {
    return this.causeStatusHistoryService.findOne(+id);
  }

  @Patch(':id')
  @Rules('causes.edit')
  update(
    @Param('id') id: string,
    @Body() updateCauseStatusHistoryDto: UpdateCauseStatusHistoryDto,
  ) {
    return this.causeStatusHistoryService.update(
      +id,
      updateCauseStatusHistoryDto,
    );
  }

  @Delete(':id')
  @Rules('causes.edit')
  remove(@Param('id') id: string) {
    return this.causeStatusHistoryService.remove(+id);
  }
}
