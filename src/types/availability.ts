export interface AvailabilityAttributes {
    id?: number;
    userId?: number;
    availableDays?: string[];
    availabilityStatus?: string;
    availableTimeSlots?: string[];
    timeZone?: string;
    noticePeriod?: string;
    preferredContactMethod?: string;
    availabilityNotes?: string;
    availabilityDate?: Date;
    availabilityTime?: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}