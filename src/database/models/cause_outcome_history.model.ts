import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cause } from './cause.model';
import { Outcome } from './outcome.model';
import { User } from './user.model';

@Table({ tableName: 'cause_outcome_history', updatedAt: false, paranoid: false })
export class CauseOutcomeHistory extends Model {
  @ForeignKey(() => Cause)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  cause_id: number;

  @ForeignKey(() => Outcome)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  outcome_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: 'Usuário que fez a mudança',
  })
  changed_by: number;

  @Column({
    type: DataType.TEXT,
  })
  notes: string;

  @CreatedAt
  @Column({ field: 'changed_at' })
  changed_at: Date;

  @BelongsTo(() => Cause)
  cause: Cause;

  @BelongsTo(() => Outcome)
  outcome: Outcome;

  @BelongsTo(() => User)
  changer: User;
}
