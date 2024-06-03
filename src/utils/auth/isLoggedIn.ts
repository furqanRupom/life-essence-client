import { authKey } from "@/constants/constant";
import { CloudHail } from "lucide-react";

export const isLoggedIn = () => {
    if (!authKey || typeof window === 'undefined') {
        return ""; 
    }
    const token = localStorage.getItem(authKey);
    return !!token;
}
