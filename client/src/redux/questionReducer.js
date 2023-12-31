import { createSlice } from "@reduxjs/toolkit";


export const questionsReducer = createSlice({
    name: "questions",
    initialState: {
        queue: [],
        answer: [],
        trace: 0
    },
    reducers: {
        startExameAction: (state, action) => {
            return {
                ...state,
                queue: action.payload,
            }
        },
        moveNextAction: (state, action) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePrevAction: (state, action) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        }
    }
});

export const { startExameAction, moveNextAction, movePrevAction } = questionsReducer.actions;

export default questionsReducer.reducer;