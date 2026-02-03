import { UserAvailabilityService } from "../services/availability";
import { ResponseService } from "../utils/response";
import { Request, Response } from "express";
export class UserAvailabilityController {

    static async createAvailability(req: Request, res: Response) {
        try {
            const availabilities = req.body;
            const availability = await UserAvailabilityService.createAvailability(availabilities);
            return ResponseService({
                res,
                status: 201,
                success: true,
                message: "User availabilities created successfully",
                data: availability
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

    // get availability by userId
    static async getAvailabilityByUserId(req: Request, res: Response) {
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
            
            const availability = await UserAvailabilityService.getAvailabilityByUserId(userId);
            
            if (!availability || availability.length === 0) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Availability not found",
                    data: null
                });
            }
            
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Availability retrieved successfully",
                data: availability
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

    // update availability
    static async updateAvailability(req: Request, res: Response) {
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
            
            const result = await UserAvailabilityService.updateAvailability(userId, updateData);

            if (!result) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Availability not found",
                    data: null
                });
            }
            
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Availability updated successfully",
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

    // delete availability
    static async deleteAvailability(req: Request, res: Response) {
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
            
            const deletedCount = await UserAvailabilityService.deleteAvailability(userId);
            
            if (deletedCount === 0) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Availability not found",
                    data: null
                });
            }
            
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Availability deleted successfully",
                data: deletedCount
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

    // get all availabilities
    static async getAllAvailabilities(req: Request, res: Response) {
        try {
            const availabilities = await UserAvailabilityService.getAllAvailabilities();
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "All availabilities retrieved successfully",
                data: availabilities
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