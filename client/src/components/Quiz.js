import React, { useEffect } from 'react'
import { Text, Stack, Button } from '@chakra-ui/react';
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';
import { MoveNextAction, MovePrevAction } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/SetResult';

const Quiz = () => {

  const trace = useSelector(state => state.questions.trace);
  const queue = useSelector(state => state.questions.queue.length);

  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(trace);
    // console.log(queue);
  })
  const onNext = () => {
    if(trace < queue){
      dispatch(MoveNextAction());
      dispatch(PushAnswer(2))
    }
  };

  const onPrev = () => {
    if (trace > 0) {
      dispatch(MovePrevAction());
    }
  };

  return (

    <Stack width="50%" marginLeft={"27%"} marginTop={"50px"}>
      <Text fontSize='5xl' border={"5px solid"} textAlign={"center"} padding={"10px"} borderColor={"#0DFF92"} borderRadius={"10px"} marginBottom={"40px"}>Quiz Application</Text>

      <Question />

      <Stack pacing={4} direction='row' align='center' justifyContent="space-between">
        <Button colorScheme='whatsapp' onClick={onPrev}>Prev</Button>
        <Button colorScheme='whatsapp' onClick={onNext}>Next</Button>
      </Stack>
    </Stack>
  )
}

export default Quiz