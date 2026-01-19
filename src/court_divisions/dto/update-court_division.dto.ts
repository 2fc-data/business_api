import { PartialType } from '@nestjs/mapped-types';
import { CreateCourtDivisionDto } from './create-court_division.dto';

export class UpdateCourtDivisionDto extends PartialType(CreateCourtDivisionDto) {}
