export interface ProfileAttributes {
    id: number;
    userId: number;
    otherPersonUserId?: number;
    fullName: string;
    phoneNumber: string;
    email: string;
    nationality: string;
    nationalId: string;
    gender: string;
    age: number;
    photo: string;
    occupation: string;
    nationalIdPhoto: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

export interface otherPersonalAttributes {
    userId: number;
    otherPersonalName: string;
    otherPersonalId: string;
    otherPersonalPhone: string;
    otherPersonalEmail: string;
    otherPersonalNationality: string;
    otherPersonalRelation: string;
    otherPersonalPhoto: string;
    otherPersonalAge: number;
    otherPersonalGender: string;
    otherPersonalOccupation: string;
    otherPersonalEmergency: boolean;
    otherPersonalNotes: string;
    otherPersonalIdPhoto: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}