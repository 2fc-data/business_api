import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'addresses' })
export class Address extends Model {
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  postcode: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.CHAR(2),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING(100),
  })
  district: string;

  @Column({
    type: DataType.STRING(200),
  })
  street: string;

  @Column({
    type: DataType.STRING(20),
  })
  number: string;

  @Column({
    type: DataType.STRING(100),
  })
  complement: string;
}
