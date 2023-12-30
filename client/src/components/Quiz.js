import React, { useEffect } from 'react'
import { Text, Stack, Button } from '@chakra-ui/react';
import Question from './Question';
import { useSelector } from 'react-redux';

const Quiz = () => {

  const state = useSelector(state => state);

  useEffect(() => {
    // console.log(state);
  })
  const onNext = () => {
    console.log("next")
  };

  const onPrev = () => {
    console.log("prev")
  };

  return (

    <Stack width="50%" marginLeft={"27%"} marginTop={"50px"}>
      <Text fontSize='5xl' border={"5px solid"} textAlign={"center"} padding={"10px"} borderColor={"#0DFF92"} borderRadius={"10px"} marginBottom={"40px"}>Quiz Application</Text>

      <Question />

      <Stack pacing={4} direction='row' align='center' justifyContent="space-between">
        <Button colorScheme='whatsapp' onClick={onNext}>Next</Button>
        <Button colorScheme='whatsapp' onClick={onPrev}>Prev</Button>
      </Stack>
    </Stack>
  )
}

export default Quiz