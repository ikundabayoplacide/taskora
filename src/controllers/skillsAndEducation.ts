import { SkillsAndEducationService } from "../services/skillsAndEducation";
import { ResponseService } from "../utils/response";
import { Request, Response } from "express";

export class SkillsAndEducationEducationController {

    // create skills and education
    static async createSkillsAndEducation(req: Request, res: Response) {
        try {
            const skillsAndEducationData = req.body;
            const skillsAndEducation = await SkillsAndEducationService.createSkillsAndEducation(skillsAndEducationData);
            return ResponseService({
                res,
                status: 201,
                success: true,
                message: "Skills and education created successfully",
                data: skillsAndEducation
            });
        } catch (error) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: (error as Error).message,
                data: null
            });
        }
    }

    // get skills and education by userId
    static async getSkillsAndEducationByUserId(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const skillsAndEducation = await SkillsAndEducationService.getSkillsAndEducationByUserId(userId);

            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            if (!skillsAndEducation) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Skills and education not found",
                    data: null
                });
            }
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Skills and education retrieved successfully",
                data: skillsAndEducation
            });
        } catch (error) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: (error as Error).message,
                data: null
            });
        }
    }

// update skills and education
    static async updateSkillsAndEducation(req: Request, res: Response) {
        try {
            const userId = req.params.userId;   
            const updateData = req.body;
            const result = await SkillsAndEducationService.updateSkillsAndEducation(userId, updateData);

            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }

            if (result[0] === 0) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Skills and education not found",
                    data: null
                });
            }

            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Skills and education updated successfully",
                data: result
            });
        } catch (error) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: (error as Error).message,
                data: null
            });
        }
    }

    // delete skills and education
    static async deleteSkillsAndEducation(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const deletedCount = await SkillsAndEducationService.deleteSkillsAndEducation(userId);

            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }

            if (deletedCount === 0) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Skills and education not found",
                    data: null
                });
            }

            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Skills and education deleted successfully",
                data: null
            });
        } catch (error) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: (error as Error).message,
                data: null
            });
        }
    }

    // get all skills and education
    static async getAllSkillsAndEducation(req: Request, res: Response) {
        try {
            const skillsAndEducation = await SkillsAndEducationService.getAllSkillsAndEducation();
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "All skills and education retrieved successfully",
                data: skillsAndEducation
            });
        } catch (error) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: (error as Error).message,
                data: null
            });
        }
    }
}