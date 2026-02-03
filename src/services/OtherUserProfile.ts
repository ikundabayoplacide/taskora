import OtherPersonProfile from "../database/models/otherPersonProfile";
import { otherPersonalAttributes } from "../types/profile";

export class OtherUserProfile {
    // create a suppoter user profile
    static async createSupporterProfile(profileData: otherPersonalAttributes): Promise<OtherPersonProfile> {
        const supportUserProfile = await OtherPersonProfile.create(profileData);
        return supportUserProfile;
    }

    // get supporter profile by userId
    static async getSupporterProfileByUserId(userId: number | string): Promise<OtherPersonProfile | null> {
        const supportUserProfile = await OtherPersonProfile.findOne({ where: { userId } });
        return supportUserProfile;
    }
    
    // update supporter profile
    static async updateSupporterProfile(userId: number | string, updateData: Partial<otherPersonalAttributes>): Promise<OtherPersonProfile | null> {
        const [updatedCount] = await OtherPersonProfile.update(updateData, { where: { userId } });
        if (updatedCount === 0) {
            return null;
        }
        const updatedProfile = await OtherPersonProfile.findOne({ where: { userId } });
        return updatedProfile;
    }

    // delete supporter profile
    static async deleteSupporterProfile(userId: number | string): Promise<number> {
        const deletedCount = await OtherPersonProfile.destroy({ where: { userId } });
        return deletedCount;
    }

    // get all supporter profiles
    static async getAllSupporterProfiles(): Promise<OtherPersonProfile[]> {
        const supportUserProfiles = await OtherPersonProfile.findAll();
        return supportUserProfiles;
    }
}