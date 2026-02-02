import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

// Environment detection
const nodeEnv = process.env.ENV || "DEV";
const env = nodeEnv.toUpperCase();

console.log(`Current environment: ${env}`);

let sequelize: Sequelize;

if (env === "PROD" && process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize({
    username: process.env[`${env}_USERNAME`] || process.env.DB_USER || 'user',
    password: process.env[`${env}_PASSWORD`] || process.env.DB_PASSWORD || 'password',
    database: process.env[`${env}_DATABASE`] || process.env.DB_NAME || 'database',
    host: process.env[`${env}_HOST`] || process.env.DB_HOST || 'localhost',
    port: parseInt(process.env[`${env}_PORT`] || process.env.DB_PORT || "5432"),
    dialect: "postgres",
    logging: env === "DEV" ? console.log : false,
  });
}

// Initialize models
import PersonalProfile from './models/personalProfile';
import OtherPersonProfile from './models/otherPersonProfile';
import Location from './models/location';
import SkillsAndEducation from './models/skillsAndEducation';
import HealthAndDrivingLicense from './models/healthAndDrivingLicense';
import Availability from './models/availability';
import { setupAssociations } from './associations';

const models = {
  PersonalProfile,
  OtherPersonProfile,
  Location,
  SkillsAndEducation,
  HealthAndDrivingLicense,
  Availability
};

// Setup associations
setupAssociations();

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('✅ Database tables synchronized');
  } catch (error) {
    console.error('❌ Database sync failed:', error);
  }
};

export const database = {
  ...models,
  sequelize,
};

export { sequelize, initializeDatabase };