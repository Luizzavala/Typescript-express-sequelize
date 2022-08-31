import { Sequelize } from 'sequelize-typescript';

import { User } from '../models/user';

const connection = new Sequelize({
  dialect: "mysql",
  host: "192.168.2.134",
  username: "root",
  password: "",
  database: "store_data",
  logging: false,
  models: [User]

});

export default connection;
