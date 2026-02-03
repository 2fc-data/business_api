import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Profile } from './profile.model';
import { Rule } from './rule.model';

@Table({ tableName: 'users_profiles_rules', updatedAt: false })
export class UserProfileRule extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Profile)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  profile_id: number;

  @ForeignKey(() => Rule)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  rule_id: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Profile)
  profile: Profile;

  @BelongsTo(() => Rule)
  rule: Rule;
}
