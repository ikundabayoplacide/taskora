import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../../config/db';
import { healthAndDrivingAttributes } from '../../types/healthAndDriving';

class HealthAndDrivingLicense extends Model<healthAndDrivingAttributes> implements healthAndDrivingAttributes {
 public id?: number;
 public userId?: number;
 public healthStatus?: string;
 public healthConditions?: string[];
 public healthNotes?: string;
 public drivingLicense?: boolean;
 public drivingLicenseType?: string[];
 public drivingLicenseUrl?: string[];
 public drivingExperienceYears?: string;
 public drivingNotes?: string | undefined;


 public createdAt!: Date;
 public updatedAt!: Date;
 public deletedAt!: Date | null;
}

HealthAndDrivingLicense.init(
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
        healthStatus: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        healthConditions: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        healthNotes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        drivingLicense: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        drivingLicenseType: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        drivingLicenseUrl: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        drivingExperienceYears: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        drivingNotes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'healthAndDrivingLicenses',
        paranoid: true,
    }
);

export default HealthAndDrivingLicense;
