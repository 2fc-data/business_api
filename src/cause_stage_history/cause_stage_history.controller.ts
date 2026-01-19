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
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('cause-stage-history')
@UseGuards(RolesGuard)
export class CauseStageHistoryController {
  constructor(
    private readonly causeStageHistoryService: CauseStageHistoryService,
  ) { }

  @Post()
  @Roles('causes.edit')
  create(
    @Body() createCauseStageHistoryDto: CreateCauseStageHistoryDto,
  ) {
    return this.causeStageHistoryService.create(createCauseStageHistoryDto);
  }

  @Get()
  @Roles('causes.view')
  findAll() {
    return this.causeStageHistoryService.findAll();
  }

  @Get(':id')
  @Roles('causes.view')
  findOne(@Param('id') id: string) {
    return this.causeStageHistoryService.findOne(+id);
  }

  @Patch(':id')
  @Roles('causes.edit')
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
  @Roles('causes.edit')
  remove(@Param('id') id: string) {
    return this.causeStageHistoryService.remove(+id);
  }
}
