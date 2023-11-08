import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const {
    DATABASE_NAME,
    DATABASE_HOST,
    DATABASE_USERNAME,
    DATABSE_PASSWORD,
    DATABASE_PORT
} = process.env

export const database = new Sequelize(
    DATABASE_NAME!,
    DATABASE_USERNAME!,
    DATABSE_PASSWORD as string,
  {
    host: DATABASE_HOST,
    port: DATABASE_PORT as unknown as number,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      encrypt: true,
    },
  }
);