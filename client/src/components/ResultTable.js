import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper';

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

    const [data, setData] = useState([])

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res)
        })
    })

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
                    {!data ?? <div>No Data Found </div>}
                    {
                        data.map((d, i) => (
                            <Tr key={i}>
                                <Td>{d?.username || ''}</Td>
                                <Td>{d?.attempts || 0}</Td>
                                <Td>{d?.points || 0}</Td>
                                <Td>{d?.achived || ""}</Td>
                            </Tr>
                        ))
                    }

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