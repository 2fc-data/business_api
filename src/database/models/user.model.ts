import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
    comment: 'CPF/CNPJ',
  })
  document: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(20),
  })
  phone1: string;

  @Column({
    type: DataType.STRING(20),
  })
  phone2: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password_hash: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @Column({
    type: DataType.DATE,
  })
  email_verified_at: Date;
}
