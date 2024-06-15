import { baseApi } from "../baseApi";


export const dashboardStatsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getDashboardStats: builder.query(
      {
        query: () => {
          return {
            url: "/dashboard-stats",
            method: "GET",
          };
        },
      }

    ),


  }),
});

export const {
  useGetDashboardStatsQuery
} = dashboardStatsApi;
