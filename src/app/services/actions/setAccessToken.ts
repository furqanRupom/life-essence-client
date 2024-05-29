"use server";
import { authKey } from "@/constants/constant";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
export const setAccessToken = (token: string, options?: any) => {
    cookies().set(authKey, token);
    if (options && options.redirect) {
        redirect(options.redirect);
    }
}