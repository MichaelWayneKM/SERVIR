import { Action, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IState {
    mapActive: boolean;
}

const initialState = {
    mapActive: false,
}
export const mapStateSlice = createSlice({
    name: "map-state",
    initialState,
    reducers: {
        mapZoomActive: (state: any) => {
            console.log(state)
            state.mapActive = true;
        },
        mapZoomDisable: (state: any) => {
            state.mapActive = false;
        },
    }
})

//actions
export const { mapZoomActive, mapZoomDisable } = mapStateSlice.actions;

//selector
export const globeStateSlector = (state: RootState) => {
    return state.mapActivityState;
}
//reducer
export default mapStateSlice.reducer;