import { HealthAndDrivingLicenseService } from "../services/healthyAndDringLicence";
import { ResponseService } from "../utils/response";
import { Request, Response } from "express";

export class healthyAndDrivingController {

    // create healthy and driving license
    static async createHealthyAndDriving(req: Request, res: Response) {
        try {
            const healthyAndDrivingData = req.body;
            const healthyAndDriving = await HealthAndDrivingLicenseService.createHealthAndDrivingLicense(healthyAndDrivingData);
            return ResponseService({
                res,
                status: 201,
                success: true,
                message: "Healthy and driving license created successfully",
                data: healthyAndDriving
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
    // get healthy and driving license by userId
    static async getHealthyAndDrivingByUserId(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const healthyAndDriving = await HealthAndDrivingLicenseService.getHealthAndDrivingLicenseByUserId(userId);

            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            if (!healthyAndDriving) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Healthy and driving license not found",
                    data: null
                });
            }
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Healthy and driving license retrieved successfully",
                data: healthyAndDriving
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

    // delete healthy and driving license
    static async deleteHealthyAndDriving(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const deletedHealthyAndDriving = await HealthAndDrivingLicenseService.deleteHealthAndDrivingLicense(userId);

            if (!userId) {
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            if (!deletedHealthyAndDriving) {
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Healthy and driving license not found",
                    data: null
                });
            }
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Healthy and driving license deleted successfully",
                data: deletedHealthyAndDriving
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

    // update healthy and driving license
    static async updateHealthyAndDriving(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const updateData = req.body;
            const updatedHealthyAndDriving = await HealthAndDrivingLicenseService.updateHealthAndDrivingLicense(userId, updateData);

            if(!userId){
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            if(!updatedHealthyAndDriving){
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Healthy and driving license not found",
                    data: null
                });
            }
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Healthy and driving license updated successfully",
                data: updatedHealthyAndDriving
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

    // get all healthy and driving licenses
    static async getAllHealthyAndDriving(req: Request, res: Response) {
        try {
            const healthyAndDriving = await HealthAndDrivingLicenseService.getAllHealthAndDrivingLicenses();
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "All healthy and driving licenses retrieved successfully",
                data: healthyAndDriving
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