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
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('cause-status-history')
@UseGuards(RolesGuard)
export class CauseStatusHistoryController {
  constructor(
    private readonly causeStatusHistoryService: CauseStatusHistoryService,
  ) { }

  @Post()
  @Roles('causes.edit')
  create(
    @Body() createCauseStatusHistoryDto: CreateCauseStatusHistoryDto,
  ) {
    return this.causeStatusHistoryService.create(createCauseStatusHistoryDto);
  }

  @Get()
  @Roles('causes.view')
  findAll() {
    return this.causeStatusHistoryService.findAll();
  }

  @Get(':id')
  @Roles('causes.view')
  findOne(@Param('id') id: string) {
    return this.causeStatusHistoryService.findOne(+id);
  }

  @Patch(':id')
  @Roles('causes.edit')
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
  @Roles('causes.edit')
  remove(@Param('id') id: string) {
    return this.causeStatusHistoryService.remove(+id);
  }
}
