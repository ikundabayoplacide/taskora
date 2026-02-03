import Availability from "../database/models/availability";
import { AvailabilityAttributes } from "../types/availability";

export class UserAvailabilityService {
    // create user availability
    static async createAvailability(availabilityData: AvailabilityAttributes): Promise<Availability> {
        const availability = await Availability.create(availabilityData);
        return availability;
    }

    // get availability by userId
    static async getAvailabilityByUserId(userId: number | string): Promise<Availability[]> {
        const availability = await Availability.findAll({ where: { userId } });
        return availability;
    }
    
    // update availability
    static async updateAvailability(userId: number | string, updateData: Partial<AvailabilityAttributes>): Promise<Availability | null> {
        const [updatedCount] = await Availability.update(updateData, { where: { userId } });
        if (updatedCount === 0) {
            return null;
        }
        const updatedAvailability = await Availability.findOne({ where: { userId } });
        return updatedAvailability;
    }

    // delete availability
    static async deleteAvailability(userId: number | string): Promise<number> {
        const deletedCount = await Availability.destroy({ where: { userId } });
        return deletedCount;
    }

    // get all availabilities
    static async getAllAvailabilities(): Promise<Availability[]> {
        const availabilities = await Availability.findAll();
        return availabilities;
    }
}
