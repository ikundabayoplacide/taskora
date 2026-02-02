import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../../config/db';
import { LocationAttributes } from '../../types/location';

class Location extends Model<LocationAttributes> implements LocationAttributes{
    public id!: number;
    public userId!: number;
    public country!: string;
    public province!: string;
    public district!: string;
    public sector!: string;
    public cell!: string;
    public village!: string;
    public latitude!: number;
    public longitude!: number;

    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date | null;
}

Location.init(
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
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sector: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cell: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        village: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'locations',
        timestamps: true,
        paranoid: true,
    }
);

export default Location;