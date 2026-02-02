"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_js_1 = require("../../config/db.js");
class SkillsAndEducation extends sequelize_1.Model {
}
SkillsAndEducation.init({
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
    skills: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    skillsUrl: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: true,
    },
    skillsLevel: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: true,
    },
    skillsExperience: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: true,
    },
    educationYear: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    education: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    educationLevel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    experienceLevel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    educationUrl: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    experienceYears: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    certifications: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    certificationsUrl: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
}, {
    sequelize: db_js_1.sequelize,
    tableName: 'skills_and_education',
    paranoid: true,
});
exports.default = SkillsAndEducation;
