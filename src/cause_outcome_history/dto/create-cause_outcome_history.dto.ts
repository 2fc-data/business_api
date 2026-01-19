export class CreateCauseOutcomeHistoryDto {
  cause_id: number;
  outcome_id: number;
  changed_by: number; // User ID
  change_date: Date;
}
