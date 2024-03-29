import {configureStore} from '@reduxjs/toolkit';
import { authApi,userApi, constantReducer, blogApi, categoryApi } from '../services';

export const store = configureStore({
    reducer:{
       constant:constantReducer,
       [authApi.reducerPath]:authApi.reducer,
       [userApi.reducerPath]:userApi.reducer,
       [blogApi.reducerPath]:blogApi.reducer,
       [categoryApi.reducerPath]:categoryApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }).concat(
        authApi.middleware,
        userApi.middleware,
        blogApi.middleware,
        categoryApi.middleware,
    ),
});