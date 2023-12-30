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

const Question = () => {
    const { select, setSelect } = useState(undefined);

    const [{ isLoading, apiData, serverError }] = useFetchQuestion();
    const questions = useSelector(state => state.questions.queue[state.questions.trace]);

    useEffect(() => {
        console.log(questions);
    })


    const onSelect = () => {
        console.log('onSelect');
    }

    if (isLoading) return <Text>Loadind...</Text>
    if (serverError) return <Text>{serverError || 'UnKnown Error'}...</Text>
    return (
        <Stack >
            <Text fontSize={"3xl"} marginBottom={"30px"}>{questions?.question} </Text>

            <OrderedList padding={"20px"} key={questions?.id} marginBottom={"20px"} >

                {
                    questions?.options.map((option, index) => (
                        <ListItem padding={"10px"} key={index}>

                            <Radio key={index} marginBottom={"20px"} colorScheme='whatsapp' value={option} onChange={onSelect}>
                                <div> {option}</div>
                            </Radio>

                        </ListItem >
                    ))
                }

            </OrderedList>
        </Stack>
    )
}

export default Question