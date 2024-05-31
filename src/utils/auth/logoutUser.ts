
import { authKey } from "@/constants/constant";
import { deleteCookies } from "./deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUser = (router: AppRouterInstance) => {
    deleteCookies([authKey, 'accessToken']);
    localStorage.removeItem(authKey);
    router.refresh();
    router.push('/signin');
}