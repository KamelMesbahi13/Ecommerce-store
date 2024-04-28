import { PRODUCTS_URL } from "../src/constance";
import { apiSlice } from "./apiSlices";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      url: PRODUCTS_URL,
    }),
    keepUnusedDataFor: 5,
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
