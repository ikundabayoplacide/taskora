import { UserProfile } from "../services/UserProfile";
import { Request, Response } from "express";
import { ResponseService } from "../utils/response";

export class UserProfileController {

    // create a personal profile
    async createProfile(req:Request, res:Response){
        try{
            const profileData = req.body;
            const profile = await UserProfile.createProfile(profileData);
            
            return ResponseService({
                res,
                status: 201,
                success: true,
                message: "Profile created successfully",
                data: profile
            });
        } catch (error:Error | any){ {
                 return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    } }

    // get personal profile by userId
    async getProfileByUserId(req:Request, res:Response){
        try{
            const userId = req.params.userId;
            const profile = await UserProfile.getProfileByUserId(userId);

            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            
            if(!profile){
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Profile not found",
                    data: null
                });
            }

            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Profile retrieved successfully",
                data: profile
            });
        } catch (error:Error | any){ {
                 return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    } }
    // update user profile
    async updateProfile(req:Request, res:Response){
        try{
            const userId = req.params.userId;
            const updateData = req.body;

            const [updatedCount, updatedProfiles] = await UserProfile.updateProfile(userId, updateData);

            if(!userId){
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }

            if (updatedCount === 0) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Profile not found or no changes made",
                    data: null
                });
            }

            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Profile updated successfully",
                data: updatedProfiles[0]
            });
        } catch (error:Error | any){ {
                 return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    } }

    // delete user profile
    async deleteProfile(req:Request, res:Response){
        try{
            const userId = req.params.userId;

            const deletedCount = await UserProfile.deleteProfile(userId);

            if(!userId){
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }

            if(deletedCount === 0){
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Profile not found",
                    data: null
                });
            }

            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Profile deleted successfully",
                data: null
            });
        } catch (error:Error | any){ {
                 return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    } }

    // get all user profiles
    async getAllProfiles(req:Request, res:Response){
        try{
            const profiles = await UserProfile.getAllProfiles();

            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Profiles retrieved successfully",
                data: profiles
            });
        } catch (error:Error | any){ {
                 return ResponseService({
                res,
                status: 500,
                success: false,
                message: error.message,
                data: null
            });
        }
    } }
}