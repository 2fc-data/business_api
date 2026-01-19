export class CreateCauseStageHistoryDto {
  cause_id: number;
  stage_id: number;
  changed_by: number; // User ID
  change_date: Date;
}
