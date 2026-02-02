"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class HealthAndDrivingLicense extends sequelize_1.Model {
}
HealthAndDrivingLicense.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        autoIncrement: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    healthStatus: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    healthDetails: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    drivingLicenseStatus: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    drivingExperienceYears: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    drivingLicense: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    drivingLicenseDetails: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    drivingLicenseType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    drivingLicenseUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    drivingNotes: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'healthAndDrivingLicenses',
    paranoid: true,
});
exports.default = HealthAndDrivingLicense;
