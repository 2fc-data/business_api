import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'stages', paranoid: false })
export class Stage extends Model {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;
}
