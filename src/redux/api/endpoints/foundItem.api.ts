import { AxiosResponseType } from "@/types/globalType/global.type";
import { baseApi } from "../baseApi";
import { TAdminFoundItemRes, TFoundItemRes } from "@/types/responseType/response.type";
import { TCreateFoundItem, TUpdateLostItem } from "@/types/dataType/data.type";
import { tagTypes } from "../tagTypes";

export const foundItemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFoundItem: builder.mutation<
      AxiosResponseType<TFoundItemRes>,
      TCreateFoundItem
    >({
      query: (data) => {
        return {
          url: "/found-items",
          method: "POST",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.foundItem]
    }),
    getAllFoundItem: builder.query<AxiosResponseType<TFoundItemRes[] | []>, Record<string, unknown>>(
      {
        query: (arg) => {
          return {
            url: "/found-items",
            method: "GET",
            params: arg
          };
        },
        providesTags: [tagTypes.foundItem]
      }

    ),
    adminAllFoundItem: builder.query<AxiosResponseType<TFoundItemRes[] | []>, Record<string, unknown>>(
      {
        query: (arg) => {
          return {
            url: "/admin-found-items",
            method: "GET",
            params: arg
          };
        },
        providesTags: [tagTypes.foundItem]
      }

    ),

    singleFoundItem: builder.query<AxiosResponseType<TAdminFoundItemRes>, string>({
      query: (findItemId) => {
        return {
          url: `/single-found-item/${findItemId}`,
          method: "GET",
        };

      },
      providesTags: [tagTypes.foundItem]

    }),

    updateFoundItem: builder.mutation<AxiosResponseType<TFoundItemRes>,
      TUpdateLostItem
    >({
      query: (payload) => {
        return {
          url: `/single-update-found-item/${payload.id}`,
          method: "PATCH",
          data: payload.data,
        };
      },
      invalidatesTags: [tagTypes.foundItem]
    }),

    deleteFoundItem: builder.mutation<AxiosResponseType<TFoundItemRes>, string>({
      query: (id) => {
        return {
          url: `/single-delete-found-item/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.foundItem]
    }),
  }),
});

export const {
  useCreateFoundItemMutation,
  useGetAllFoundItemQuery,
  useSingleFoundItemQuery,
  useUpdateFoundItemMutation,
  useDeleteFoundItemMutation,
  useAdminAllFoundItemQuery
} = foundItemApi;
