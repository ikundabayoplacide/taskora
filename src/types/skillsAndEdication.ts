
export interface SkillsAndEducationAttributes {
    id?: number;
    userId?: number;
    skills?: string[];
    skillsLevel?: string[];
    skillsExperience?: string[];
    skillsUrl?: string[];
    educationYear?: string[];
    education?: string[];
    educationUrl?: string[];
    certifications?: string[];
    certificationsUrl?: string[];
    experienceYears?: string[];
    educationLevel?: string;
    experienceLevel?: string;
    status?: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}