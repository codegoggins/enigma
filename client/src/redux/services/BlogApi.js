import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { api } from '../../config';
import Cookies from 'js-cookie';

export const blogApi = createApi({
    reducerPath:"blogApi",
    baseQuery:fetchBaseQuery({
        baseUrl:api + "blog/",
        prepareHeaders:(headers,{getState}) => {
            const token = Cookies.get("token");
            if(token){
                headers.set("auth-token",`Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes:["blog"],
    endpoints:(builder)=>({
       getAllBlogs:builder.query({
        query:()=>"",
        providesTags:(result) => result ? ["blog"] : ["blog"],
       }),
       getSingleBlog:builder.query({
        query:(id)=>`${id}`,
        providesTags:(result) => result ? ["blog"] : ["blog"],
       }),
        createBlog:builder.mutation({
            query:(body) => ({
                url:"create",
                method:"POST",
                body:body,
            }),
        }),
    })
});

export const {useGetAllBlogsQuery,useCreateBlogMutation,useGetSingleBlogQuery} = blogApi;
export default blogApi;