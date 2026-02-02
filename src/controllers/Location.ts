import { PersonalLocationService } from "../services/location";
import { ResponseService } from "../utils/response";
import { Request, Response } from "express";

export class PersonalLocationController{
    // create a new location
    async createLocation(req:Request, res:Response){
        try{
            const locationData = req.body;
            const location = await PersonalLocationService.createLocation(locationData);
            
            return ResponseService({
                res,
                status: 201,
                success: true,
                message: "Location created successfully",
                data: location
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

    // get location by userId
    async getLocationByUserId(req:Request, res:Response){
        try{
            const userId = req.params.userId;
            const location = await PersonalLocationService.getLocationByUserId(userId);
            
            if(!userId){
                return ResponseService({
                    res,
                    status: 400,
                    success: false,
                    message: "User ID is required",
                    data: null
                });
            }
            if(!location){
                return ResponseService({
                    res,
                    status: 404,
                    success: false,
                    message: "Location not found",
                    data: null
                });
            }
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Location retrieved successfully",
                data: location
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

    // update location
    async updateLocation(req:Request, res:Response){
        try{
            const userId = req.params.userId;
            const updateData = req.body;
            const result = await PersonalLocationService.updateLocation(userId, updateData);
            
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Location updated successfully",
                data: result
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

    // delete location
    async deleteLocation(req:Request, res:Response){
        try{
            const userId = req.params.userId;
            const deletedCount = await PersonalLocationService.deleteLocation(userId);
            
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Location deleted successfully",
                data: deletedCount
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

    // get all locations
    async getAllLocations(req:Request, res:Response){
        try{
            const locations = await PersonalLocationService.getAllLocations();
            
            return ResponseService({
                res,
                status: 200,
                success: true,
                message: "Locations retrieved successfully",
                data: locations
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