export class CreateCauseDto {
  number: string;
  court_id: number;
  court_division_id: number;
  area_id: number;
  stage_id: number;
  status_id: number;
  outcome_id?: number;
  subject: string;
  description?: string;
  value?: number;
}
