import { baseApi } from "./baseApi";

const bloodsApi = baseApi.injectEndpoints({
    endpoints:(build) => ({
        getBloodRequets:build.query({
            query:() => {
                return {
                    url:"/donation-request",
                    method:"GET",
                }
            }
        }),
     
        
    })
})


export const {useGetBloodRequetsQuery} = bloodsApi;