import { authKey } from "@/constants/constant";

export const isLoggedIn = () => {
    if (!authKey || typeof window == 'undefined') {
        return "";
    };
    const token = localStorage.getItem(authKey);
    return !!token;
}