import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Court } from './court.model';

@Table({ tableName: 'court_divisions' })
export class CourtDivision extends Model {
  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Court)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  court_id: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @BelongsTo(() => Court)
  court: Court;
}
