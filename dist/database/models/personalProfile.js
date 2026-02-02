"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class PersonalProfile extends sequelize_1.Model {
}
PersonalProfile.init({
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
    fullName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nationalId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    photo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nationalIdPhoto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonUserId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'personal_profiles',
    timestamps: true,
    paranoid: true,
});
exports.default = PersonalProfile;
