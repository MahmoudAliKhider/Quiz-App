import {
    Stack,
    Text,
    OrderedList,
    Radio,
    ListItem,


} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useFetchQuestion } from '../hooks/FetchQuestions';
import { useSelector } from 'react-redux';

const Question = ({onChecked}) => {
    const [select, setSelect] = useState(undefined);

    const [{ isLoading, apiData, serverError }] = useFetchQuestion();
    const questions = useSelector(state => state.questions.queue[state.questions.trace]);
    const result = useSelector(state => state.result.result);

    useEffect(() => {
        console.log(result);
    })


    const onSelect = (i) => {
      onChecked(i)
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
                        {/* <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div> */}
                    </li>
                ))
            }
        </ul>

        </Stack>
    )
}

export default Question