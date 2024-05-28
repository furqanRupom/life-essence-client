import { authKey } from "@/constants/constant";

export const isLoggedIn = () => {
    const token = localStorage.getItem(authKey);
    return !!token;
}