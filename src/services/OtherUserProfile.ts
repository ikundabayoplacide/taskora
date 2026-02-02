import OtherPersonProfile from "../database/models/otherPersonProfile";
import { otherPersonalAttributes } from "../types/profile";

export class OtherUserProfile {
    // create a suppoter user profile
    static async createSupporterProfile(profileData:otherPersonalAttributes): Promise<void> {
        const supportUserProfile = await OtherPersonProfile.create(profileData);
        return supportUserProfile;
    }

    // get supporter profile by userId
    static async getSupporterProfileByUserId(userId: number|string): Promise<otherPersonalAttributes | null> {
        const supportUserProfile = await OtherPersonProfile.getByUserId(userId);
        return supportUserProfile;
    }
    // update supporter profile
    static async updateSupporterProfile(userId: number|string, updateData: Partial<otherPersonalAttributes>): Promise<void> {
        const result = await OtherPersonProfile.update(userId, updateData);
        return result;
    }

    // delete supporter profile
    static async deleteSupporterProfile(userId: number|string): Promise<void> {
        const deletedCount = await OtherPersonProfile.delete(userId);
        return deletedCount;
    }

    // get all supporter profiles
    static async getAllSupporterProfiles(): Promise<void> {
        const supportUserProfiles = await OtherPersonProfile.getAll();
        return supportUserProfiles;
    }
}