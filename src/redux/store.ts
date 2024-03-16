import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import { loginApi } from "./api/loginApi";
import { productsApi } from "./api/productApi";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(usersApi.middleware, loginApi.middleware, productsApi.middleware),
});
export default store;
