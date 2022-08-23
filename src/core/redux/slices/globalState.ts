import { Action, createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: "counter",
    initialState: {
        sidebarActive: false
    },
    reducers: {
        toggleSideBar: (state: { sidebarActive: boolean }) => {
            state.sidebarActive = !state.sidebarActive;
        }
    }
})

//actions
export const { toggleSideBar } = globalSlice.actions;


//reducer
export default globalSlice.reducer;