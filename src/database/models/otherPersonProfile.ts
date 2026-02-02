import { otherPersonalAttributes } from "../../types/profile";
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/db";

class OtherPersonProfile extends Model<otherPersonalAttributes> implements otherPersonalAttributes {
    public userId!: number;
    public otherPersonalName!: string;
    public otherPersonalId!: string;
    public otherPersonalPhone!: string;
    public otherPersonalEmail!: string;
    public otherPersonalNationality!: string;
    public otherPersonalRelation!: string;
    public otherPersonalPhoto!: string;
    public otherPersonalAge!: number;
    public otherPersonalGender!: string;
    public otherPersonalOccupation!: string;
    public otherPersonalEmergency!: boolean;
    public otherPersonalNotes!: string;
    public otherPersonalIdPhoto!: string;

    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date | null;
}

OtherPersonProfile.init(
    {
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        otherPersonalName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalNationality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalRelation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalPhoto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalAge: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        otherPersonalGender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalOccupation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherPersonalEmergency: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        otherPersonalNotes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        otherPersonalIdPhoto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "other_person_profiles",
        timestamps: true,
        paranoid: true,
    }
);

export default OtherPersonProfile;