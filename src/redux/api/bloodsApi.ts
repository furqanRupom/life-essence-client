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
            providesTags:['user','donor']
            
        }),
        donorRequest: build.query({
            query: () => {
                return {
                    url: "/donor-request",
                    method: "GET",
                }
            },
            providesTags: ['user','donor']
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
        }),
         donationRequest: build.mutation({
             query: (data) => ({
                 url: "/donation-request",
                 method: "POST",
                 data
             }),
             invalidatesTags:['donor']
         })
    })
})


export const { useGetBloodRequetsQuery, useDonorRequestQuery, useDonorListQuery,useDonorDetailsQuery,useDonationRequestMutation } = bloodsApi;