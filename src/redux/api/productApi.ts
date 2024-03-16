import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants/constants";

interface Products {
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
      getProducts: builder.query<Products[], void>({
        query: () => ({
          url: "products",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
      }),
      //   createUsers: builder.mutation<CreateUserResponse, CreateUserRequest>({
      //     query: (body) => ({ 
      //       url: "users",
      //       method: "POST",
      //       body,
      //     }),
      //   }),
    };
  },
});
export const { useGetProductsQuery } = productsApi;
// useGetProductsQuery
