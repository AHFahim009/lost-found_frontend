import { AxiosResponseType } from "@/types/globalType/global.type";
import { baseApi } from "../baseApi";
import {
  TClaimRes,
  TFoundItemRes,
  TLostItemRes,
  TMyServiceRes,
} from "@/types/responseType/response.type";
import { tagTypes } from "../tagTypes";

export const myServicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myStats: builder.query<AxiosResponseType<TMyServiceRes>, "">({
      query: () => {
        return {
          url: "/my-stats",
          method: "GET",
        };
      },
      providesTags: [tagTypes.lostItem, tagTypes.foundItem, tagTypes.claim]
    }),
    myLostReports: builder.query<AxiosResponseType<TLostItemRes[]>, "">({
      query: () => {
        return {
          url: "/my-lost-reports",
          method: "GET",
        };
      },
      providesTags: [tagTypes.lostItem],
    }),
    myFoundReport: builder.query<AxiosResponseType<TFoundItemRes[]>, "">({
      query: () => {
        return {
          url: "/my-found-reports",
          method: "GET",
        };
      },
      providesTags: [tagTypes.foundItem]
    }),
    myClaimReports: builder.query<AxiosResponseType<TClaimRes[]>, "">({
      query: () => {
        return {
          url: "/my-claim-reports",
          method: "GET",
        };
      },
      providesTags: [tagTypes.claim]
    }),
  }),
});

export const {
  useMyStatsQuery,
  useMyLostReportsQuery,
  useMyFoundReportQuery,
  useMyClaimReportsQuery,
} = myServicesApi;
