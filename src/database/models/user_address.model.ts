import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Address } from './address.model';

@Table({ tableName: 'user_addresses' })
export class UserAddress extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Address)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  address_id: number;

  @Column({
    type: DataType.ENUM('residential', 'commercial', 'billing', 'other'),
    defaultValue: 'residential',
  })
  address_type: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_primary: boolean;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Address)
  address: Address;
}
