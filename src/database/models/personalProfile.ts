
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/db';
import { ProfileAttributes } from '../../types/profile';

class PersonalProfile extends Model<ProfileAttributes> implements ProfileAttributes {
    public id!: number;
    public userId!: number;
    public fullName!: string;
    public phoneNumber!: string;
    public email!: string;
    public nationality!: string;
    public nationalId!: string;
    public gender!: string;
    public age!: number;
    public photo!: string;
    public occupation!: string;
    public nationalIdPhoto!: string;
    public otherPersonUserId?: number;

    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date | null;
}

PersonalProfile.init(
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
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nationalId: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nationalIdPhoto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonUserId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'personal_profiles',
        timestamps: true,
        paranoid: true,
    }
);

export default PersonalProfile;