import { AxiosResponseType } from "@/types/globalType/global.type";
import { baseApi } from "../baseApi";
import { TClaimRes, TFoundItemRes } from "@/types/responseType/response.type";
import { TCreateClaim, TCreateFoundItem, TUpdateLostItem } from "@/types/dataType/data.type";
import { tagTypes } from "../tagTypes";

export const claimReportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createClaim: builder.mutation<
      AxiosResponseType<TClaimRes>,
      TCreateClaim
    >({
      query: (data) => {
        return {
          url: "/claims",
          method: "POST",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.claim]
    }),
    updateClaim: builder.mutation({
      query: (payload) => {


        return {

          url: `/claims/${payload.claimId}`,
          method: 'PUT',
          data: payload.data,

        }
      },
      invalidatesTags: [tagTypes.foundItem, tagTypes.claim]
    }),

  }),
});

export const {
  useCreateClaimMutation,
  useUpdateClaimMutation
} = claimReportApi;
