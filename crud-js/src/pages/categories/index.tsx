import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import axios from "axios";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";

export default function Categories() {
    const toast = useToast()
    const [products, setProducts] = useState<Array<any>>([]);
    const handleGetProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/category/readAll")
            setProducts(res.data.product)
        } catch (e) {
            toast({
                title: "Erro",
                status: "error",
                description: "Não foi possível obter os dados"
            })
        }
    }

    useEffect(() => {
        handleGetProducts();
    }, []);
    return (
        <PageTemplate title="Categorias" button={true} buttonText="Cadastrar Categoria" destination="/categories/cadastrar">
            <TableContainer w="100%">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Descrição</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products ?
                            products.map((item: any) =>
                                <Tr>
                                    <Td>{item.name}</Td>
                                    <Td>{item.description}</Td>
                                </Tr>)
                            : null}
                    </Tbody>
                </Table>
            </TableContainer>
        </PageTemplate>
    )
}