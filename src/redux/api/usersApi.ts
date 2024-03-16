import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL } from "../../utils/constants/constants";

interface Users {
  ud: number;
  email: string;
}
interface CreateUserRequest {
  userName: string;
  email: string;
  password: string;
}
interface CreateUserResponse {
  id: number;
  userName: string;
  email: string;
  password: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: REQUEST_URL }),
  endpoints: (builder) => {
    return {
      getUsers: builder.query<Users[], void>({
        query: () => "users",
      }),
      createUsers: builder.mutation<CreateUserResponse, CreateUserRequest>({
        query: (body) => ({
          url: "users",
          method: "POST",
          body,
        }),
      }),
    };
  },
});
export const { useGetUsersQuery, useCreateUsersMutation } = usersApi;