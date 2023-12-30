import { createSlice } from "@reduxjs/toolkit";


export const questionsReducer = createSlice({
 name: "questions",
    initialState: {
        queue:[],
        answer:[],
        trace:0
    },
    reducers: {
        startExameAction :(state , action)=>{
            return{
                ...state,
                queue: action.payload,
            }
        }
    }
});

export const {startExameAction} = questionsReducer.actions;

export default questionsReducer.reducer;