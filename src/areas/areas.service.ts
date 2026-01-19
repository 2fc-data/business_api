import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from '../database/models/area.model';

@Injectable()
export class AreasService {
  constructor(
    @InjectModel(Area)
    private areaModel: typeof Area,
  ) { }

  create(createAreaDto: CreateAreaDto) {
    return this.areaModel.create({ ...createAreaDto });
  }

  findAll() {
    return this.areaModel.findAll();
  }

  findOne(id: number) {
    return this.areaModel.findByPk(id);
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return this.areaModel.update(updateAreaDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.areaModel.destroy({
      where: { id },
    });
  }
}
