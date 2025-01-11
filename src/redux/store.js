import { configureStore } from "@reduxjs/toolkit";
import { getDatas } from "./api/createapi";


export const store = configureStore({
    reducer: {
        [getDatas.reducerPath] : getDatas.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getDatas.middleware),
});

