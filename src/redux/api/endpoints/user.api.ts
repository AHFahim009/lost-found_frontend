import { AxiosResponseType } from "@/types/globalType/global.type";
import { baseApi } from "../baseApi";
import { TAllUserRes, TFoundItemRes } from "@/types/responseType/response.type";
import { TCreateFoundItem, TUpdateLostItem, TUpdateUserRole } from "@/types/dataType/data.type";
import { tagTypes } from "../tagTypes";

export const userManageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query<
      AxiosResponseType<TAllUserRes[]>,
      ""
    >({
      query: () => {
        return {
          url: "/all-user",
          method: "GET",
        };
      },
      providesTags: [tagTypes.user]
    }),




    updateUserRole: builder.mutation<AxiosResponseType<null>,
      TUpdateUserRole
    >({
      query: (payload) => {
        return {
          url: `/update-user-role/${payload.id}`,
          method: "PATCH",
          data: payload.data,
        };
      },
      invalidatesTags: [tagTypes.user]
    }),

    deleteUser: builder.mutation<AxiosResponseType<null>, string>({
      query: (id) => {
        return {
          url: `/delete-user/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: [tagTypes.user]
    }),
  }),
});

export const {
  useDeleteUserMutation,
  useGetAllUserQuery,
  useUpdateUserRoleMutation
} = userManageApi;
