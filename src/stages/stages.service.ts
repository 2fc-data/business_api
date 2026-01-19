import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { Stage } from '../database/models/stage.model';

@Injectable()
export class StagesService {
  constructor(
    @InjectModel(Stage)
    private stageModel: typeof Stage,
  ) { }

  create(createStageDto: CreateStageDto) {
    return this.stageModel.create({ ...createStageDto });
  }

  findAll() {
    return this.stageModel.findAll();
  }

  findOne(id: number) {
    return this.stageModel.findByPk(id);
  }

  update(id: number, updateStageDto: UpdateStageDto) {
    return this.stageModel.update(updateStageDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.stageModel.destroy({
      where: { id },
    });
  }
}
