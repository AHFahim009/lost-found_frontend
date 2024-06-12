import { AxiosResponseType } from "@/types/globalType/global.type";
import { baseApi } from "../baseApi";
import { TLostItemRes } from "@/types/responseType/response.type";
import { TCreateLostItem, TUpdateLostItem } from "@/types/dataType/data.type";
import { tagTypes } from "../tagTypes";

export const lostItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLostItem: builder.mutation<
      AxiosResponseType<TLostItemRes>,
      TCreateLostItem
    >({
      query: (data) => {
        return {
          url: "/create-lost-item",
          method: "POST",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.lostItem],
    }),

    getAllLostItem: builder.query<
      AxiosResponseType<TLostItemRes[]>,
      Record<string, unknown>
    >({
      query: (arg) => {
        return {
          url: "/get-lost-items",
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.lostItem],
    }),

    getSingleLostItem: builder.query<AxiosResponseType<TLostItemRes>, string>({
      query: (lostItemId) => {
        return {
          url: `/single-lost-item/${lostItemId}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.lostItem],
    }),

    updateSingleLostItem: builder.mutation<
      AxiosResponseType<TLostItemRes>,
      TUpdateLostItem
    >({
      query: (payload) => {
        return {
          url: `/single-update-lost-item/${payload.id}`,
          method: "PATCH",
          data: payload.data,
        };
      },
      invalidatesTags: [tagTypes.lostItem],
    }),
    deleteLostItem: builder.mutation<AxiosResponseType<TLostItemRes>, string>({
      query: (id) => {
        return {
          url: `/single-delete-lost-item/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.lostItem],
    }),
  }),
});

export const {
  useCreateLostItemMutation,
  useGetAllLostItemQuery,
  useGetSingleLostItemQuery,
  useUpdateSingleLostItemMutation,
  useDeleteLostItemMutation,
} = lostItemApi;
