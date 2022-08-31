import {
  Table,
  Model,
  Column,
  DataType
} from "sequelize-typescript";


@Table({
  timestamps: false,
  tableName: "core_users"
})

export class User extends Model {
  @Column({
    type: DataType.TINYINT,
    allowNull: false,
  })
  id_person!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
  })
  status!: number;
}
