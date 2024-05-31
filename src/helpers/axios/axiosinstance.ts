
import { setAccessToken } from "@/app/services/actions/setAccessToken";
import { authKey } from "@/constants/constant";
import { IMetaData } from "@/interfaces/interfaces";

import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import axios from "axios";
const instance = axios.create();
instance.defaults.headers.post['Content-type'] = "application/json";
instance.defaults.headers['Accept'] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const accessToken = getLocalStorage(authKey);
    if (accessToken) {
        config.headers.Authorization = accessToken;
    }
    setAccessToken(accessToken as string)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
// @ts-ignore
instance.interceptors.response.use(function (response) {
 
    const responseObject: { data: any, meta: IMetaData } = {
        data: response?.data?.data,
        meta: response?.data?.meta
    }
    console.log(responseObject.meta)
    return responseObject;

}, async function (error) {
        const responseErrorObject = {
            statusCode: error?.response?.data?.statusCode || 500,
            message: error?.response?.data?.message || "something went wrong",
            data: error?.response?.data?.data || "something went wrong"
        }
        return responseErrorObject;

});


export { instance };