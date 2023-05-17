import React, { useEffect, useState } from "react";
import PageTemplate from "../templates/PageTemplate";
import axios from "axios";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function Products() {
    const title = "Produtos"
    const [products, setProducts] = useState<Array<any>>([]);
    const handleGetProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/product/readAll")
            setProducts(res.data.product)
        } catch (e) {

        }
    }

    useEffect(() => {
        handleGetProducts();
    }, []);
    return (
        <PageTemplate title="Produtos" button={true} buttonText="Cadastrar Produto" destination="/products/cadastrar">
            <Table>
                <Thead>
                    <Th>Nome</Th>
                    <Th>Preço</Th>
                    <Th>Descrição</Th>
                </Thead>
                <Tbody>
                    {products ?
                        products.map((item: any) =>
                            <Tr>
                                <Td>{item.name}</Td>
                                <Td>{item.price}</Td>
                                <Td>{item.description}</Td>
                            </Tr>)
                        : null}
                </Tbody>
            </Table>
        </PageTemplate>
    )
}