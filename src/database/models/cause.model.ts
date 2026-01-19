import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Court } from './court.model';
import { CourtDivision } from './court_division.model';
import { Area } from './area.model';
import { Stage } from './stage.model';
import { Status } from './status.model';
import { Outcome } from './outcome.model';

@Table({ tableName: 'causes' })
export class Cause extends Model {
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
    comment: 'Número do processo',
  })
  number: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @ForeignKey(() => Court)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  court_id: number;

  @ForeignKey(() => CourtDivision)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  court_division_id: number;

  @ForeignKey(() => Area)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  area_id: number;

  @ForeignKey(() => Stage)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  current_stage_id: number;

  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  current_status_id: number;

  @ForeignKey(() => Outcome)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  outcome_id: number;

  @Column({
    type: DataType.DECIMAL(15, 2),
    defaultValue: 0.0,
  })
  total_value: number;

  @Column({
    type: DataType.DECIMAL(15, 2),
    defaultValue: 0.0,
    comment: 'Honorários totais',
  })
  total_fees: number;

  @Column({
    type: DataType.DECIMAL(15, 2),
    defaultValue: 0.0,
    comment: 'Valor do cliente',
  })
  customer_amount: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @BelongsTo(() => Court)
  court: Court;

  @BelongsTo(() => CourtDivision)
  court_division: CourtDivision;

  @BelongsTo(() => Area)
  area: Area;

  @BelongsTo(() => Stage)
  current_stage: Stage;

  @BelongsTo(() => Status)
  current_status: Status;

  @BelongsTo(() => Outcome)
  outcome: Outcome;
}
