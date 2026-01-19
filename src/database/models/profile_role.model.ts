import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Profile } from './profile.model';
import { Role } from './role.model';

@Table({ tableName: 'profile_roles', updatedAt: false, paranoid: false })
export class ProfileRole extends Model {
  @ForeignKey(() => Profile)
  @Column({
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  profile_id: number;

  @ForeignKey(() => Role)
  @Column({
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  role_id: number;

  // The SQL definition only specifies created_at, no updated_at or deleted_at
  @CreatedAt
  created_at: Date;

  @BelongsTo(() => Profile)
  profile: Profile;

  @BelongsTo(() => Role)
  role: Role;
}
