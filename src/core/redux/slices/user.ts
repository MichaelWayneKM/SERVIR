import { Action, createSlice } from "@reduxjs/toolkit";
import { Auth } from "firebase/auth";

interface IUser {
    user: Auth | null;
}

const initialState: IUser = {
    user: null
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: IUser, action: { payload: IUser["user"], type: string }) => {
            state.user = action.payload;
        },
        logout: (state: any) => {
            state.user = null;
        },
    }
})

//actions
export const { login, logout } = userSlice.actions;


//reducer
export default userSlice.reducer;