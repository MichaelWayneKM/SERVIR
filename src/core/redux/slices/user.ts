import { Action, createSlice } from "@reduxjs/toolkit";
import { Auth, User } from "firebase/auth";

interface IUser {
    user: User | null;
}

const initialState: IUser = {
    user: null
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: IUser, action: { payload: IUser["user"], type: string }) => {
            console.log(state)
            state.user = action.payload;
            console.log(state)
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