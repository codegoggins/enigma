import {configureStore} from '@reduxjs/toolkit';
import { authApi, constantReducer } from '../services';

export const store = configureStore({
    reducer:{
       constant:constantReducer,
       [authApi.reducerPath]:authApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }).concat(
        authApi.middleware,
    ),
});