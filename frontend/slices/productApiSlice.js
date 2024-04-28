import { PRODUCTS_URL } from "../src/constance";
import { apiSlice } from "./apiSlices";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
