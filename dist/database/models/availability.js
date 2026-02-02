"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class Availability extends sequelize_1.Model {
}
Availability.init({
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
    availabilityStatus: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    availabilityNotes: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    availabilityDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    availabilityTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    noticePeriod: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'availabilities',
    paranoid: true,
});
exports.default = Availability;
