import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import PageTemplate from "../components/templates/PageTemplate";

export default function Nos() {
    const title = "Nós"
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
                        <Tr>
                            <Td>Gabriel Torres Takahashi</Td>
                            <Td>600601</Td>
                        </Tr>
                        <Tr>
                            <Td>Kevin de Souza Lima</Td>
                            <Td>601969</Td>
                        </Tr>
                        <Tr>
                            <Td>Laura Lacort Zimmermann</Td>
                            <Td>603201</Td>
                        </Tr>
                        <Tr>
                            <Td>Renan Palavizini Biazolla</Td>
                            <Td>608831</Td>
                        </Tr>
                        <Tr>
                            <Td>Rebeca Yamanaka Alves Ferreira</Td>
                            <Td>600482</Td>
                        </Tr>
                        <Tr>
                            <Td>Matheus Aparecido</Td>
                            <Td>601721</Td>
                        </Tr>

                    </Tbody>
                </Table>
            </TableContainer>
        </PageTemplate>
    )
}