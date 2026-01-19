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
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('roles')
@UseGuards(RolesGuard)
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Post()
  @Roles('settings.manage')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @Roles('settings.manage', 'users.view')
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @Roles('settings.manage')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  @Roles('settings.manage')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @Roles('settings.manage')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
