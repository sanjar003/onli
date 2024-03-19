import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants/constants";

interface ProductRequest{
  name:string;
  photoUrl:string;
  price:string;
  quantity:string;
}

interface ProductsResponse {
  id: number;
  name: string;
  photoUrl: string;
  price: string;
  quantity: string;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query<ProductsResponse[], void>({
        query: () => ({
          url: "products",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
      }),
        createUsers: builder.mutation<ProductsResponse, ProductRequest>({
          query: (body) => ({ 
            url: "users",
            method: "POST",
            body,
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
          }),
        }),
    };
  },
});
export const { useGetProductsQuery, useCreateUsersMutation } = productsApi;
// useGetProductsQuery
