import { Stack, VStack, Text, WrapItem, Button } from '@chakra-ui/react'
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/questionReducer'
import { resetResultAction } from '../redux/resulteReducer'
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper'

const Result = () => {
  const dispatch = useDispatch();

  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state)

  useEffect(() => {
    console.log(flag);
  })

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10)
  const flag = flagResult(totalPoints, earnPoints)

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (

    <VStack fontFamily={"sans-serif"} width={"50%"} marginLeft="26%" marginTop="40px">
      <Text fontSize='5xl' border={"5px solid"} textAlign={"center"} padding={"10px"} borderColor={"#0DFF92"} borderRadius={"10px"} width={"100%"} marginBottom={"40px"}>Quiz Application</Text>
      <Stack direction={"column"} border={"1px solid"} width={"100%"} padding={"30px"}>

        <Stack marginTop={"20px"} marginBottom={"5px"} direction={"row"} justifyContent={"space-between"}>
          <Text >userName</Text>
          <Text>Mahmoud Khider</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text >Total Quiz Points :</Text>
          <Text>{totalPoints || 0}</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text >Total Question :</Text>
          <Text>0{queue.length || 0}</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text >Total Attempts :</Text>
          <Text>0{attempts || 0}</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text >Total Earn Points :</Text>
          <Text>{earnPoints || 0}</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text > Quiz Result </Text>
          <Text style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}>{flag ? "Passed" : "Failed"}</Text>
        </Stack>

      </Stack>

      <WrapItem marginTop={"30px"}>
        <Link to={'/'}>
          <Button colorScheme='yellow' onClick={onRestart}>Restart</Button>
        </Link>
      </WrapItem>

      <br />

      <ResultTable />
    </VStack>
  )
}

export default Result