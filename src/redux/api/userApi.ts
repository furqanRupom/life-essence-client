import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        registration: build.mutation({
            query: (data) => {
                return {
                    url: "/register",
                    method: "POST",
                    data: data
                }
            },
            invalidatesTags:['user']
        }),
        login: build.mutation({
            query: (data) => {
                return {
                    url: "/login",
                    method: "POST",
                    data: data
                }
            },
            invalidatesTags:['user']
        }),
        getMyProfile : build.query({
            query:() => ({
                url:"/my-profile",
                method:"GET"
            })
        })

    })
})


export const { useRegistrationMutation, useLoginMutation,useGetMyProfileQuery } = userApi;