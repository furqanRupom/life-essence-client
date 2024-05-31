import { baseApi } from "./baseApi";

const bloodsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getBloodRequets: build.query({
            query: () => {
                return {
                    url: "/donation-request",
                    method: "GET",
                }
            },
            providesTags:['user']
            
        }),
        donorRequest: build.query({
            query: () => {
                return {
                    url: "/donor-request",
                    method: "GET",
                }
            },
            providesTags: ['user']
        }),
        donorList: build.query({
            query: (args) => ({
                url: "/donor-list",
                method: "GET",
                params: args
            }),
            transformResponse: (response: any, meta: any) => {
                console.log(meta)

                return {
                    donnors: response,
                    meta: meta
                }
            }

        }),
    })
})


export const { useGetBloodRequetsQuery, useDonorRequestQuery, useDonorListQuery } = bloodsApi;