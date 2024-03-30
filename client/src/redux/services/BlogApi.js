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
    tagTypes:["blog","comment"],
    endpoints:(builder)=>({
       getAllBlogs:builder.query({
        query:()=>"",
        providesTags:(result) => result ? ["blog"] : ["blog"],
       }),
       getSingleBlog:builder.query({
        query:(id)=>`${id}`,
        providesTags:(result) => result ? ["blog","comment"] : ["blog","comment"],
       }),
       getCommentsOnBlog:builder.query({
        query:(id)=>`comments/${id}`,
        providesTags:(result) => result ? ["blog","comment"] : ["blog","comment"],
       }),
        createBlog:builder.mutation({
            query:(body) => ({
                url:"create",
                method:"POST",
                body:body,
            }),
            invalidatesTags:["blog"],
        }),
        likeBlog:builder.mutation({
            query:(id) => ({
                url:`like/${id}`,
                method:"POST",
            }),
            invalidatesTags:["blog"],
        }),
        dislikeBlog:builder.mutation({
            query:(id) => ({
                url:`dislike/${id}`,
                method:"POST",
            }),
            invalidatesTags:["blog"],
        }),
        commentOnBlog:builder.mutation({
            query:(body) => ({
                url:`comment/${body.id}`,
                method:"POST",
                body:body,
            }),
            invalidatesTags:["comment"],
        }),
    })
});

export const {useGetAllBlogsQuery,useCreateBlogMutation,useGetSingleBlogQuery,useLikeBlogMutation,useDislikeBlogMutation,useCommentOnBlogMutation,useGetCommentsOnBlogQuery} = blogApi;
export default blogApi;