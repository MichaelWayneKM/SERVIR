import { Action, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state: any) => {
            state.count += 1;
        },
        decrement: (state: any) => {
            state.count -= 1;
        },
        incrementByAmount: (state: any, action: any) => {
            state.count += action.payload;
        }
    }
})

//actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;


//reducer
export default counterSlice.reducer;