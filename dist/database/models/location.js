"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class Location extends sequelize_1.Model {
}
Location.init({
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
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    province: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    district: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sector: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cell: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    village: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'locations',
    timestamps: true,
    paranoid: true,
});
exports.default = Location;
