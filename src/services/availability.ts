import Availability from "../database/models/availability";
import { AvailabilityAttributes } from "../types/availability";

export class UserAvailabilityService {
    // create user availability
    static async createAvailability(availabilityData:AvailabilityAttributes): Promise<void> {
        const availability = await Availability.create(availabilityData);
        return availability;
    }

    // get availability by userId
    static async getAvailabilityByUserId(userId: number|string): Promise<void> {
        const availability = await Availability.getByUserId(userId);
        return availability;
    }
    // update availability
    static async updateAvailability(userId: number|string, updateData: Partial<AvailabilityAttributes>): Promise<void> {
        const result = await Availability.update(userId, updateData);
        return result;
    }

    // delete availability
    static async deleteAvailability(userId: number|string): Promise<void> {
        const deletedCount = await Availability.delete(userId);
        return deletedCount;
    }

    // get all availabilities
    static async getAllAvailabilities(): Promise<void> {
        const availabilities = await Availability.getAll();
        return availabilities;
    }
}
