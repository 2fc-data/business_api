import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseOutcomeHistoryDto } from './create-cause_outcome_history.dto';

export class UpdateCauseOutcomeHistoryDto extends PartialType(CreateCauseOutcomeHistoryDto) {}
