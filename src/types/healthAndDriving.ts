export interface healthAndDrivingAttributes {
    id?: number;
    userId?: number;
    healthStatus?: string;
    healthConditions?: string[];
    healthNotes?: string;
    drivingLicense?: boolean;
    drivingLicenseType?: string[];
    drivingLicenseUrl?: string[];
    drivingExperienceYears?: string;
    drivingNotes?: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}