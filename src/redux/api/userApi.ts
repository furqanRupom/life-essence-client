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
            }),
            providesTags:['user']
        }),
        updateProfile : build.mutation({
            query:(data) => ({
                   url:"/my-profile",
                   method:"PUT",
                   data
            }),
            invalidatesTags:['user']
        }),
        updateSocialProfile:build.mutation({
            query:(data) => ({
                url:"/update-social-profile",
                method:"PUT",
                data
            })
        }),
        changePassword: build.mutation({
            query:(data) => ({
                url:"/change-password",
                method:"PATCH",
                data
            })
        })

    })
})


export const { useRegistrationMutation, useLoginMutation,useGetMyProfileQuery,useUpdateProfileMutation,useUpdateSocialProfileMutation,useChangePasswordMutation } = userApi;