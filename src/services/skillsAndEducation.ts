import SkillsAndEducation from "../database/models/skillsAndEducation";
import { SkillsAndEducationAttributes } from "../types/skillsAndEdication";

export class SkillsAndEducationService {
    // create skills and education
    static async createSkillsAndEducation(skillsData:SkillsAndEducationAttributes): Promise<SkillsAndEducation> {
        const skillsAndEducation = await SkillsAndEducation.create(skillsData);
        return skillsAndEducation;
    }

    // get skills and education by userId
    static async getSkillsAndEducationByUserId(userId: number|string): Promise<SkillsAndEducationAttributes| null> {
        const skillsAndEducation = await SkillsAndEducation.findOne({ where: { userId } });
        return skillsAndEducation;
    }
    // update skills and education
    static async updateSkillsAndEducation(userId: number|string, updateData:Partial<SkillsAndEducationAttributes>): Promise<[number, SkillsAndEducation[]]> {
        const result = await SkillsAndEducation.update(updateData, { where: { userId } });
        return result;
    }

    // delete skills and education
    static async deleteSkillsAndEducation(userId: number|string): Promise<number> {
        const deletedCount = await SkillsAndEducation.destroy({ where: { userId } });
        return deletedCount;
    }

    // get all skills and education
    static async getAllSkillsAndEducation(): Promise<SkillsAndEducationAttributes[]> {
        const skillsAndEducation = await SkillsAndEducation.findAll();
        return skillsAndEducation;
    }
}