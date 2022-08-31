import { Dialect, Sequelize } from 'sequelize'

const dbName = process.env.DB_NAME || "store_data";
const dbUser = process.env.DB_USER || "root";
const dbHost = process.env.DB_HOST || "192.168.2.134";
const dbPassword = process.env.DB_PASSWORD || "";

// create a conection with the database
const sequelizeConnection  = new Sequelize(dbName, dbUser, dbPassword,{
  dialect: "mysql",
  host: dbHost,
  logging: console.log,
});

export default sequelizeConnection ;
