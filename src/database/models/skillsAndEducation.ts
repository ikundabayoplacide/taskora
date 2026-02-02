import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../../config/db';
import { SkillsAndEducationAttributes } from '../../types/skillsAndEdication';

class SkillsAndEducation extends Model implements SkillsAndEducationAttributes {
    public id!: number;
    public userId!: number;
    public skills?: string[];
    public skillsUrl?: string[];
    public skillsLevel?: string[];
    public skillsExperience?: string[];
    public educationYear?: string[];
    public education?: string[];
    public educationLevel?: string;
    public experienceLevel?: string;
    public educationUrl?: string[];
    public experienceYears?: string[];
    public certifications?: string[];
    public certificationsUrl?: string[];
    public status?: string | undefined;

    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date | null;
}

SkillsAndEducation.init(
    {
        id: {
            type: DataTypes.UUID,
            autoIncrement: true,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        skills: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        skillsUrl: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        skillsLevel: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        skillsExperience: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        educationYear: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        education: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        educationLevel: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        experienceLevel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        educationUrl: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        experienceYears: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        certifications: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        certificationsUrl: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'skills_and_education',
        paranoid: true,
    }
);

export default SkillsAndEducation;