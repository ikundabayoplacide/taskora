import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../../config/db';
import { AvailabilityAttributes } from '../../types/availability';

class Availability extends Model<AvailabilityAttributes> implements AvailabilityAttributes {
    public id?: number;
    public userId?: number;
    public availabilityStatus?: string;
    public availabilityDetails?: string | undefined;
    public availabilityNotes?: string | undefined;
    public availabilityDate?: Date;
    public availabilityTime?: string;
    public noticePeriod?: string | undefined;


    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date | null;
}

Availability.init(
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
        availabilityStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        availabilityNotes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        availabilityDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        availabilityTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        noticePeriod: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'availabilities',
        paranoid: true,
    }
);

export default Availability;