import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { api } from '../../config';
import Cookies from 'js-cookie';

export const categoryApi = createApi({
    reducerPath:"categoryApi",
    baseQuery:fetchBaseQuery({
        baseUrl:api + "category/",
        prepareHeaders:(headers,{getState}) => {
            const token = Cookies.get("token");
            if(token){
                headers.set("auth-token",`Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes:["category"],
    endpoints:(builder)=>({
       getAllCategories:builder.query({
        query:()=>"",
        providesTags:(result) => result ? ["category"] : ["category"],
       })
    })
})

export const {useGetAllCategoriesQuery} = categoryApi;
export default categoryApi;