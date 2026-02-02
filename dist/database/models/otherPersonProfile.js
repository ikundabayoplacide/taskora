"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class OtherPersonProfile extends sequelize_1.Model {
}
OtherPersonProfile.init({
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
    otherPersonalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalPhone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalEmail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalNationality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalRelation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalPhoto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalAge: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    otherPersonalGender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalOccupation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otherPersonalEmergency: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    otherPersonalNotes: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    otherPersonalIdPhoto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "other_person_profiles",
    timestamps: true,
    paranoid: true,
});
exports.default = OtherPersonProfile;
