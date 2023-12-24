import { Stack, VStack, Text, WrapItem, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'

const Result = () => {
  const onClick = () => {
    console.log('onClick');
  }
  return (

    <VStack fontFamily={"sans-serif"} color={"white"} width={"50%"} marginLeft="26%" marginTop="40px">
      <Text fontSize='5xl' border={"5px solid"} textAlign={"center"} padding={"10px"} borderColor={"#0DFF92"} borderRadius={"10px"} width={"100%"} marginBottom={"40px"}>Quiz Application</Text>
      <Stack direction={"column"} color={"#c3c1c1"} border={"1px solid"} width={"100%"} padding={"30px"}>

        <Stack marginTop={"20px"} marginBottom={"5px"} direction={"row"} justifyContent={"space-between"}>
          <Text >userName</Text>
          <Text>Mahmoud Khider</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text >Total Quiz Points :</Text>
          <Text>50</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text >Total Question :</Text>
          <Text>05</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text >Total Attempts :</Text>
          <Text>03</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text >Total Earn Points :</Text>
          <Text>30</Text>
        </Stack>

        <Stack direction={"row"} marginBottom={"5px"} justifyContent={"space-between"}>
          <Text > Quiz Result </Text>
          <Text>Passed</Text>
        </Stack>

      </Stack>

      <WrapItem marginTop={"30px"}>
        <Link to={'/'}>
          <Button colorScheme='yellow' onClick={onClick}>Restart</Button>
        </Link>
      </WrapItem>

      <br />

      <ResultTable />
    </VStack>
  )
}

export default Result