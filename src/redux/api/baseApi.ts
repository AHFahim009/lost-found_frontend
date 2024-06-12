// Need to use the React-specific entry point to import createApi
import { axiosBaseQuery } from '@/axios/axiosBaseApi'
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagProviders } from './tagTypes'




export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: () => ({}),
  tagTypes: tagProviders
})

