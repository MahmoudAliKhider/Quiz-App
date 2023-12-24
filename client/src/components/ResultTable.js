import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const ResultTable = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>View Test Results </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Attempts</Th>
                        <Th>Earn Points</Th>
                        <Th>Result</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Mahmoud Khider</Td>
                        <Td>04</Td>
                        <Td>20</Td>
                        <Td>Passed</Td>
                    </Tr>
                    <Tr>
                        <Td>Ali Mahmoud</Td>
                        <Td>03</Td>
                        <Td>30</Td>
                        <Td>Passed</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Attempts</Th>
                        <Th>Earn Points</Th>
                        <Th>Result</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default ResultTable