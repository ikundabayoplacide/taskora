import { LocationAttributes } from "../types/location";
import Location from "../database/models/location";

export class PersonalLocationService {
    // create a new location
    static async createLocation(locationData: LocationAttributes): Promise<Location> {
        const location = await Location.create(locationData);
        return location;
    }

    // get location by userId
    static async getLocationByUserId(userId: number | string): Promise<Location | null> {
        const location = await Location.findOne({ where: { userId } });
        return location;
    }

    // update location
    static async updateLocation(userId: number | string, updateData: Partial<LocationAttributes>): Promise<Location | null> {
        const [updatedCount] = await Location.update(updateData, { where: { userId } });
        if (updatedCount === 0) {
            return null;
        }
        const updatedLocation = await Location.findOne({ where: { userId } });
        return updatedLocation;
    }

    // delete location
    static async deleteLocation(userId: number | string): Promise<number> {
        const deletedCount = await Location.destroy({ where: { userId } });
        return deletedCount;
    }

    // get all locations
    static async getAllLocations(): Promise<Location[]> {
        const locations = await Location.findAll();
        return locations;
    }
}