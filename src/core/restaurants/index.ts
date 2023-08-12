import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Data } from "./types";

export interface RestaurantServiceQueryRequest {
  page: number;
  pageSize: number;
  lat: number;
  long: number;
}

export interface RestaurantServiceQueryResponse {
  render_type: number;
  status: boolean;
  data: Data;
}

export const restaurantService = createApi({
  reducerPath: "restaurant-vendors",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://snappfood.ir/mobile/v3/",
  }),
  endpoints: (builder) => ({
    getRestaurantVendors: builder.query<
      RestaurantServiceQueryResponse,
      RestaurantServiceQueryRequest
    >({
      query: ({ page, pageSize, lat, long }) =>
        `restaurant/vendors-list?page=${page}&pageSize=${pageSize}&lat=${lat}&long=${long}`,
    }),
  }),
});

export const { useGetRestaurantVendorsQuery } = restaurantService;
