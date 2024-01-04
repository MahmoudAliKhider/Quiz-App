import { createSlice } from "@reduxjs/toolkit"

export const resulteReducer = createSlice(
    {
        name: "resulte",
        initialState: {
            userId: null,
            result: [],
        },
        reducers: {
            setUserId: (state, action) => {
                state.userId = action.payload;
            },
            pushResaultAction: (state, action) => {
                state.result.push(action.payload);
            },
            resetResultAction: () => {
                return {
                    userId: null,
                    result: [],
                }
            }
        },
    });
export const { setUserId, pushResaultAction, resetResultAction } = resulteReducer.actions;
export default resulteReducer.reducer;