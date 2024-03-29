import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { api } from '../../config';
import Cookies from 'js-cookie';

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:api + "user/",
        prepareHeaders:(headers,{getState}) => {
            const token = Cookies.get("token");
            if(token){
                headers.set("auth-token",`Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes:["user"],
    endpoints:(builder)=>({
       getUser:builder.query({
        query:()=>"/",
        providesTags:(result) => result ? ["user"] : ["user"],
       })
    })
})

export const {useGetUserQuery} = userApi;
export default userApi;