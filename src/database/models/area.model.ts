import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'areas' })
export class Area extends Model {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
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
