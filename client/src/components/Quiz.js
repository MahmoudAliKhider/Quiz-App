import React, { useEffect, useState } from 'react'
import { Text, Stack, Button } from '@chakra-ui/react';
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';
import { MoveNextAction, MovePrevAction } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/SetResult';
import { Navigate } from 'react-router-dom'
const Quiz = () => {

  const [check, setChecked] = useState(undefined);

  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(check);
    // console.log(result);
  })

  const onNext = () => {
    if (trace < queue.length) {
      dispatch(MoveNextAction());

      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

  };

  const onPrev = () => {
    if (trace > 0) {
      dispatch(MovePrevAction());
    }
  };

  const onChecked = (check) => {
    setChecked(check);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to='/result' replace={true}></Navigate>
  }

  return (

    <Stack width="50%" marginLeft={"27%"} marginTop={"50px"}>
      <Text fontSize='5xl' border={"5px solid"} textAlign={"center"} padding={"10px"} borderColor={"#0DFF92"} borderRadius={"10px"} marginBottom={"40px"}>Quiz Application</Text>

      <Question onChecked={onChecked} />

      <Stack marginTop={"20px"} direction='row' align='center' justifyContent="space-between">
        {trace > 0 ? <Button colorScheme='whatsapp' onClick={onPrev}>Prev</Button> : <div></div>}
        <Button colorScheme='whatsapp' onClick={onNext}>Next</Button>
      </Stack>
    </Stack>
  )
}

export default Quiz