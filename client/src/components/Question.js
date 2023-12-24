import {
    Stack,
    Text,
    List,
    Radio,

} from '@chakra-ui/react'
import React, { useState } from 'react'

const Question = () => {
    const { select, setSelect } = useState(undefined);

    const onSelect = () => {
        console.log('onSelect');
    }
    return (
        <Stack >
            <Text marginBottom={"30px"}>Simple Question1 </Text>

            <List marginBottom={"20px"} flexDirection={"column"}>

                <Radio  marginBottom={"20px"} colorScheme='whatsapp' value='false' onChange={onSelect}>
                    Answer Question 1
                </Radio>
                <div className='check'></div>
                <br />


            </List>
        </Stack>
    )
}

export default Question