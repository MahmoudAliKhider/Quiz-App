import { Stack, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useFetchQuestion } from '../hooks/FetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../hooks/SetResult';

const Question = ({ onChecked }) => {
    const [checked, setChecked] = useState(undefined);
    const { trace } = useSelector(state => state.questions);

    const [{ isLoading, apiData, serverError }] = useFetchQuestion();
    const questions = useSelector(state => state.questions.queue[state.questions.trace]);
    const result = useSelector(state => state.result.result);

    const dispatch = useDispatch();
    
    // useSelector(state => console.log(state))
    
    useEffect(() => {
        dispatch(updateResult({ trace, checked }))
    }, [checked])


    function onSelect(i) {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked }))
    };


    if (isLoading) return <Text>Loadind...</Text>
    if (serverError) return <Text>{serverError || 'UnKnown Error'}...</Text>
    return (
        <Stack >
            <Text fontSize={"3xl"} marginBottom={"30px"}>{questions?.question} </Text>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)}
                            />

                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
                        </li>
                    ))
                }
            </ul>

        </Stack>
    )
}

export default Question