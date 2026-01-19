import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseStageHistoryDto } from './create-cause_stage_history.dto';

export class UpdateCauseStageHistoryDto extends PartialType(CreateCauseStageHistoryDto) {}
