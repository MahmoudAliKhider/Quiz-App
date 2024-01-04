import { useEffect, useState } from "react"
import data,{answers} from "../Database/data";
import { useDispatch } from "react-redux";

import * as Action from '../redux/questionReducer';


export const useFetchQuestion = () => {
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });
    const dispatch = useDispatch();

    useEffect(() => {
        setGetData((prev) => ({ ...prev, isLoading: true }));

        (async () => {
            try {
                const questions = await data;
                if (questions.length > 0) {
                    setGetData((prev) => ({ ...prev, isLoading: false }));
                    setGetData((prev) => ({ ...prev, apiData: {questions,answers} }));

                    dispatch(Action.startExameAction({questions,answers}));

                } else {
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData((prev) => ({ ...prev, isLoading: false }));
                setGetData((prev) => ({ ...prev, serverError: error }));

            }
        })()
    }, [dispatch])
    return [getData, setGetData];
}

export const MoveNextAction = ()=> (dispatch) =>{
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevAction = ()=> (dispatch) =>{
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}