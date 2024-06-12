import { AxiosResponseType } from "@/types/globalType/global.type";
import { baseApi } from "../baseApi";
import { TClaimRes, TFoundItemRes, UserProfile } from "@/types/responseType/response.type";
import { TCreateClaim, TCreateFoundItem, TUpdateLostItem } from "@/types/dataType/data.type";
import { tagTypes } from "../tagTypes";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<
      AxiosResponseType<UserProfile>,
      any
    >({
      query: (payload) => {
        return {
          url: `/my-profile/${payload.id}`,
          method: "PUT",
          data: payload.data,
        };
      },
      invalidatesTags: [tagTypes.profile]
    }),
    getProfile: builder.query<
      AxiosResponseType<UserProfile>,
      ""
    >({
      query: () => {
        return {
          url: "/my-profile",
          method: "GET",

        };
      },
      providesTags: [tagTypes.profile]
    }),
    singleProfile: builder.query<
      AxiosResponseType<UserProfile>,
      string
    >({
      query: (id) => {
        return {
          url: `/my-profile/${id}`,
          method: "GET",

        };
      },
      providesTags: [tagTypes.profile]
    }),

  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useSingleProfileQuery
} = profileApi;
