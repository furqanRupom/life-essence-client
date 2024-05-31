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

                return {
                    donnors: response,
                    meta: meta
                }
            }

        }),
        donorDetails : build.query({
            query:(args) => ({
                url:`/donor-details/${args.id}`,
                method:"GET"
            })
        })
    })
})


export const { useGetBloodRequetsQuery, useDonorRequestQuery, useDonorListQuery,useDonorDetailsQuery } = bloodsApi;