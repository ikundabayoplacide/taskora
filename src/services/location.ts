import { LocationAttributes } from "../types/location";
import  Location  from "../database/models/location";

export class PersonalLocationService {
    // create a new location
    static async createLocation(locationData:LocationAttributes): Promise<void> {
        const location = await Location.create(locationData);
        return location;
    }

    // get location by userId
    static async getLocationByUserId(userId: number|string): Promise<void> {
        const location = await Location.getByUserId(userId);
        return location;
    }

    // update location
    static async updateLocation(userId: number|string, updateData: Partial<LocationAttributes>): Promise<void> {
        const result = await Location.update(userId, updateData);
        return result;
    }

    // delete location
    static async deleteLocation(userId: number|string): Promise<void> {
        const deletedCount = await Location.delete(userId);
        return deletedCount;
    }

    // get all locations
    static async getAllLocations(): Promise<void> {
        const locations = await Location.getAll();
        return locations;
    }
}