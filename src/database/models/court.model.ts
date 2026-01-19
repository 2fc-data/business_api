import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'courts' })
export class Court extends Model {
  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.CHAR(2),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;
}
