import { Request, Response } from "express";
import { OtherUserProfile } from "../services/OtherUserProfile";
import { ResponseService } from "../utils/response";

export class OtherUserProfileController {

    // create the person profile of anyone who will be responsible for the user who has role on task
    async createOtherUserProfile(req: Request, res: Response) {
        try {
            const profileData = req.body;
            const profile = await OtherUserProfile.createSupporterProfile(profileData);
            
            return ResponseService({
                res,
                status: 201,
                success: true,
                message: "Other user profile created successfully",
                data: profile
            });
        } catch (error: Error | any) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    }

    // get supporter profile by userId
    async getOtherUserProfileByUserId(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            
            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            
            const profile = await OtherUserProfile.getSupporterProfileByUserId(userId);
            
            if (!profile) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Other user profile not found",
                    data: null
                });
            }
            
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Other user profile retrieved successfully",
                data: profile
            });
        } catch (error: Error | any) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    }

    // update supporter profile
    async updateOtherUserProfile(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const updateData = req.body;
            
            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            
            const updatedProfile = await OtherUserProfile.updateSupporterProfile(userId, updateData);
            
            if (!updatedProfile) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Other user profile not found",
                    data: null
                });
            }

            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Other user profile updated successfully",
                data: updatedProfile
            });
        } catch (error: Error | any) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    }

    // delete supporter profile
    async deleteOtherUserProfile(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            
            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            
            const deletedCount = await OtherUserProfile.deleteSupporterProfile(userId);
            
            if (deletedCount === 0) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Other user profile not found",
                    data: null
                });
            }

            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Other user profile deleted successfully",
                data: null
            });
        } catch (error: Error | any) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    }

    // get all supporter profiles
    async getAllOtherUserProfiles(req: Request, res: Response) {
        try {
            const profiles = await OtherUserProfile.getAllSupporterProfiles();
            
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Other user profiles retrieved successfully",
                data: profiles
            });
        } catch (error: Error | any) {
            return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    }
}