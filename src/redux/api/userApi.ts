import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints:(build) => ({
        registration:build.mutation({
            query:(data) => {
            
                return {
                    url:"/register",
                    method:"POST",
                   body :data
                }
            }
        }),
        login:build.mutation({
            query:(data) => {
                return {
                    url:"/login",
                    method:"POST",
                    body:data
                }
            }
        })
        
    })
})


export const {useRegistrationMutation,useLoginMutation} = userApi;