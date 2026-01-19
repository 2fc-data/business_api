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

@Table({ tableName: 'user_profiles' })
export class UserProfile extends Model {
  @ForeignKey(() => User)
  @Column({
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Profile)
  @Column({
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  profile_id: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Profile)
  profile: Profile;
}
