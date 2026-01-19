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
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('profiles')
@UseGuards(RolesGuard)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) { }

  @Post()
  @Roles('settings.manage')
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  @Roles('users.view') // Viewing profiles is common for user management
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  @Roles('users.view')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id);
  }

  @Patch(':id')
  @Roles('settings.manage')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  @Roles('settings.manage')
  remove(@Param('id') id: string) {
    return this.profilesService.remove(+id);
  }
}
