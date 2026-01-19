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
import { StagesService } from './stages.service';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('stages')
@UseGuards(RolesGuard)
export class StagesController {
  constructor(private readonly stagesService: StagesService) { }

  @Post()
  @Roles('settings.manage')
  create(@Body() createStageDto: CreateStageDto) {
    return this.stagesService.create(createStageDto);
  }

  @Get()
  @Roles('settings.manage', 'causes.view')
  findAll() {
    return this.stagesService.findAll();
  }

  @Get(':id')
  @Roles('settings.manage')
  findOne(@Param('id') id: string) {
    return this.stagesService.findOne(+id);
  }

  @Patch(':id')
  @Roles('settings.manage')
  update(@Param('id') id: string, @Body() updateStageDto: UpdateStageDto) {
    return this.stagesService.update(+id, updateStageDto);
  }

  @Delete(':id')
  @Roles('settings.manage')
  remove(@Param('id') id: string) {
    return this.stagesService.remove(+id);
  }
}
