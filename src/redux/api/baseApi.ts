import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";

//https://blood-donate-three.vercel.app/api
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery({
        baseUrl:"http://localhost:5000/api"
    }),
    endpoints: () => ({}),
    tagTypes:['user','donor']


})