import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants/constants";

interface ProductRequest {
  name: string;
  photoUrl: string;
  price: string;
  quantity: string;
}

interface ProductsResponse {
  _id: number;
  name: string;
  photoUrl: string;
  price: string;
  quantity: string;
}

export const favoriteProductsApi = createApi({
  reducerPath: "favoriteProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
  tagTypes: ["FavoriteProducts"],
  endpoints: (builder) => {
    return {
      getFavoiteProducts: builder.query<ProductsResponse[], void>({
        query: () => ({
          url: "favorite-products",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
        providesTags: ["FavoriteProducts"],
      }),
      toglleFavoriteProduct: builder.mutation<ProductsResponse, ProductRequest>({
        query: (id) => ({
          url:` favorite-products/${id}`,
          method: "PATCH",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
        invalidatesTags: ["FavoriteProducts"],
      }),
    };
  },
});
export const { useGetFavoiteProductsQuery, useToglleFavoriteProductMutation } = favoriteProductsApi;
