import { Model,DataTypes } from "sequelize";
import sequelize from '../config/db';

export default class User  extends Model {}

User.init({
  // Model attributes are defined here
  idUser: {
    field: 'id_user',
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement:true
  },
  idPerson: {
    field: 'id_person',
    type: DataTypes.INTEGER
    // allowNull defaults to true
  }
}, {
  // model options
  sequelize, // the connection instance
  tableName: 'core_users', // the name of the table
  modelName: 'User', // Table name
  updatedAt:false,
  createdAt:false
});
