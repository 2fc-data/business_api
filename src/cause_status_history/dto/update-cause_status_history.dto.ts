import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseStatusHistoryDto } from './create-cause_status_history.dto';

export class UpdateCauseStatusHistoryDto extends PartialType(CreateCauseStatusHistoryDto) {}
