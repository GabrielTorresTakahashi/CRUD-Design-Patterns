import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templates/PageTemplate";
import api from "@/services/api";

export default function Nos() {
    const title = "Nós"
    const [members, setMembers] = useState<any>([]);
    const getProducts = async () => {
        const response = await api.get("member/readAll");
        setMembers(response.data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <PageTemplate title={title}>
            <TableContainer w="100%">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>RA</Th>
                        </Tr>
                    </Thead>
                    <Tbody fontSize="xl" fontWeight={600}>
                        {members.map((member: any) => (
                            <Tr key={member.id}>
                                <Td>{member.name}</Td>
                                <Td>#{member.ra}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </PageTemplate>
    )
}