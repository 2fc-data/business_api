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
import { Rule } from './rule.model';

@Table({ tableName: 'profile_rules', updatedAt: false, paranoid: false })
export class ProfileRule extends Model {
  @ForeignKey(() => Profile)
  @Column({
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  profile_id: number;

  @ForeignKey(() => Rule)
  @Column({
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  rule_id: number;

  // The SQL definition only specifies created_at, no updated_at or deleted_at
  @CreatedAt
  created_at: Date;

  @BelongsTo(() => Profile)
  profile: Profile;

  @BelongsTo(() => Rule)
  rule: Rule;
}
