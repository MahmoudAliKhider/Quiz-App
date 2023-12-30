import {
    Stack,
    Text,
    OrderedList,
    Radio,
    ListItem,


} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import data from '../Database/data'
import {useFetchQuestion} from '../hooks/FetchQuestions';

const Question = () => {
    const { select, setSelect } = useState(undefined);
    const Question = data[0];

    const [{isLoading, apiData, serverError}] = useFetchQuestion();
    useEffect(() => {
        // console.log(Question)
        // console.log(isLoading)
        // console.log(apiData)
        // console.log(serverError)
    })


    const onSelect = () => {
        console.log('onSelect');
    }
    return (
        <Stack >
            <Text fontSize={"3xl"} marginBottom={"30px"}>{Question.question} </Text>

            <OrderedList padding={"20px"} key={Question.id} marginBottom={"20px"} >

                {
                    Question.options.map((option, index) => (
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