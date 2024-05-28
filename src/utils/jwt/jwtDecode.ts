import { jwtDecode } from "jwt-decode";
import { getLocalStorage } from "../localStorage";
import { authKey } from "@/constants/constant";

export const decodeToken = () => {
    if (!authKey || typeof window == 'undefined') {
        return "";
    };
    const token = getLocalStorage(authKey);
    return jwtDecode(token as string)
}