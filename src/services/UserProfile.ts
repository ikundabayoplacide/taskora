import PersonalProfile from "../database/models/personalProfile";
import { ProfileAttributes } from "../types/profile";

export class UserProfile {
   
    // create a personal profile
    static async createProfile(profileData:ProfileAttributes): Promise<PersonalProfile> {
        const profile = await PersonalProfile.create(profileData);
        return profile;
    } 
   
    // get personal profile by userId
    static async getProfileByUserId(userId: number|string): Promise<PersonalProfile | null> {
        const profile = await PersonalProfile.findOne({ where: { userId } });
        return profile;
    }

    // update personal profile
    static async updateProfile(userId: number|string, updateData: Partial<ProfileAttributes>): Promise<[number, PersonalProfile[]]> {
        const result = await PersonalProfile.update(updateData, { where: { userId }, returning: true });
        return result;
    }

    // delete personal profile
    static async deleteProfile(userId: number|string): Promise<number> {
        const deletedCount = await PersonalProfile.destroy({ where: { userId } });
        return deletedCount;
    }

    // get all personal profiles
    static async getAllProfiles(): Promise<PersonalProfile[]> {
        const profiles = await PersonalProfile.findAll();
        return profiles;
    }


}