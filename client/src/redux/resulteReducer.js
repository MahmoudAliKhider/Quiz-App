import { createSlice } from "@reduxjs/toolkit"

export const resulteReducer = createSlice (
    { 
        name: "resulte",
        initialState: {
            userId : null,
            result: [],
        },
        reducers: {
            setUserId: (state, action) => {
                state.userId = action.payload;
            },
        },
    });
    export const {setUserId} = resulteReducer.actions;
    export default resulteReducer.reducer;