import HealthAndDrivingLicense from "../database/models/healthAndDrivingLicense";
import { healthAndDrivingAttributes } from "../types/healthAndDriving";

export class HealthAndDrivingLicenseService {
    // create health and driving license
    static async createHealthAndDrivingLicense(healthData:healthAndDrivingAttributes): Promise<HealthAndDrivingLicense> {
        const healthAndDrivingLicense = await HealthAndDrivingLicense.create(healthData);
        return healthAndDrivingLicense;
    }

    static async getHealthAndDrivingLicenseByUserId(userId: number|string): Promise<healthAndDrivingAttributes| null> {
        const healthAndDrivingLicense = await HealthAndDrivingLicense.findOne({
            where: { userId }
        });
        return healthAndDrivingLicense ? healthAndDrivingLicense.dataValues : null;
    }
    static async updateHealthAndDrivingLicense(userId: number|string, updateData:Partial<healthAndDrivingAttributes>): Promise<[number, HealthAndDrivingLicense[]]> {
        const result = await HealthAndDrivingLicense.update(updateData, { where: { userId } });
        return result;
    }

    static async deleteHealthAndDrivingLicense(userId: number|string): Promise<number> {
        const deletedCount = await HealthAndDrivingLicense.destroy({ where: { userId } });
        return deletedCount;
    }

    static async getAllHealthAndDrivingLicenses(): Promise<healthAndDrivingAttributes[]> {
        const healthAndDrivingLicenses = await HealthAndDrivingLicense.findAll();
        return healthAndDrivingLicenses.map(license => license.dataValues);
    }
}