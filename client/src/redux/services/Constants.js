import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loggedIn : false,
};

const constantSlice = createSlice({
	name: "constant",
	initialState,
	reducers: {
		loginUser : (state, action) =>{
			state.loggedIn = true;
		},
		logoutUser : (state, action) =>{
			state.loggedIn = false;
		}		
	},
});

export const { loginUser, logoutUser } = constantSlice.actions;
export default constantSlice.reducer;