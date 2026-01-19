export class CreateCauseStatusHistoryDto {
  cause_id: number;
  status_id: number;
  changed_by: number; // User ID
  change_date: Date;
}
