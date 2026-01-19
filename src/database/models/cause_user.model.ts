import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cause } from './cause.model';
import { User } from './user.model';

@Table({ tableName: 'cause_users' })
export class CauseUser extends Model {
  @ForeignKey(() => Cause)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  cause_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.ENUM('client', 'lawyer', 'assistant', 'opposing_party', 'other'),
    allowNull: false,
  })
  role_type: string;

  @Column({
    type: DataType.ENUM('plaintiff', 'defendant', 'third_party'),
    comment: 'Lado que representa: autor, réu ou terceiro',
  })
  party_side: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    comment: 'Indica se é o responsável principal',
  })
  is_primary: boolean;

  @BelongsTo(() => Cause)
  cause: Cause;

  @BelongsTo(() => User)
  user: User;
}
