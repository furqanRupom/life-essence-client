import { Role } from "@/utils/sidebar/SidebarGenerator";
import { JwtPayload } from "jwt-decode";

export interface JwtPayloadWithRole extends JwtPayload {
    role: Role;
    name:string;
    email:string;
}

export interface IMetaData {
    page: number;
    limit: number;
    total: number
}
export interface IDonor {
    id: string;
    name:string;
    email: string;
    location: string;
    bloodType: string;
    availability: string;
    createdAt: string;
    updatedAt: string;
    profile: {
        id: string;
        userId: string;
        bio: string;
        age: number;
        lastDonationDate: string;
        createdAt: string;
        updatedAt: string;
    };
}
