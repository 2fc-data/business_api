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
import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('areas')
@UseGuards(RolesGuard)
export class AreasController {
  constructor(private readonly areasService: AreasService) { }

  @Post()
  @Roles('settings.manage')
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.areasService.create(createAreaDto);
  }

  @Get()
  // No specific role for viewing areas? Maybe public or basic auth. 
  // For now assuming open or requiring 'dashboard.view' just to test.
  // Using 'settings.manage' as it seems administrative.
  @Roles('settings.manage')
  findAll() {
    return this.areasService.findAll();
  }

  @Get(':id')
  @Roles('settings.manage')
  findOne(@Param('id') id: string) {
    return this.areasService.findOne(+id);
  }

  @Patch(':id')
  @Roles('settings.manage')
  update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areasService.update(+id, updateAreaDto);
  }

  @Delete(':id')
  @Roles('settings.manage')
  remove(@Param('id') id: string) {
    return this.areasService.remove(+id);
  }
}
