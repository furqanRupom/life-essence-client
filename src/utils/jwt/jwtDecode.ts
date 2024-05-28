import { jwtDecode } from "jwt-decode";
import { getLocalStorage } from "../localStorage";
import { authKey } from "@/constants/constant";

export const decodeToken = () => {
    const token = getLocalStorage(authKey);
    return jwtDecode(token as string)
}