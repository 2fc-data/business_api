import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({ tableName: 'user_sessions', updatedAt: false, paranoid: false })
export class UserSession extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.STRING(255),
  })
  device_info: string;

  @Column({
    type: DataType.STRING(45),
  })
  ip_address: string;

  @Column({
    type: DataType.TEXT,
  })
  user_agent: string;

  @CreatedAt
  @Column({ field: 'login_at' })
  login_at: Date;

  @Column({
    type: DataType.DATE,
  })
  logout_at: Date;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @BelongsTo(() => User)
  user: User;
}
