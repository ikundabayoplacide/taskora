export interface LocationAttributes {
    id: number;
    userId: number;
    country: string;
    province: string;
    district: string;
    sector: string;
    cell: string;
    village: string;
    latitude: number;
    longitude: number;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}