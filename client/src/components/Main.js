import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Text, Stack, Input } from '@chakra-ui/react';
const Main = () => {
  const userRef = useRef(null);

  return (
    <Stack  width={"50%"} marginLeft="31%" marginTop="40px" >
      <Text fontSize='5xl' border={"5px solid"} textAlign={"center"} padding={"10px"} borderColor={"#0DFF92"} borderRadius={"10px"} width={"80%"} marginBottom={"40px"}>Quiz Application</Text>

      <Text fontSize='2xl'>1- You will be asked 10 questions one after another.</Text>
      <Text fontSize='2xl'>2- 10 points is awarded for the correct answer.</Text>
      <Text fontSize='2xl'>3- Each question has three options. You can choose only one options.</Text>
      <Text fontSize='2xl'>4- You can review and change answers before the quiz finish.</Text>
      <Text fontSize='2xl'>5- The result will be declared at the end of the quiz.</Text>

      <form id='form' >
        <Input marginLeft={"20%"} textAlign={"center"} alignItems="center" width={"40%"} marginTop="40px" size="lg" ref={userRef} type='text' placeholder='userName*' />
      </form>

      <Stack marginRight={"20%"} marginTop={"20px"} color="red" alignItems="center">
        <Link to={'Quiz'}> Start Quiz </Link>
      </Stack>
    </Stack>
  )
}

export default Main