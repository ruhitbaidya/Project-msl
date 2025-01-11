import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getDatas = createApi({
    reducerPath: "tasks",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getTask: builder.query({
            query : ()=> "/posts"
        })
    })
})

export const { useGetTaskQuery } = getDatas

