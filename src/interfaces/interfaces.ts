import { Role } from "@/utils/sidebar/SidebarGenerator";
import { JwtPayload } from "jwt-decode";

export interface JwtPayloadWithRole extends JwtPayload {
    role: Role;
}