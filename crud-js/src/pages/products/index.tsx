import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import axios from "axios";
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { HiPencil, HiTrash } from "react-icons/hi"
import { useRouter } from "next/router";
import ProductLi from "@/components/ProductLi";

export default function Products() {
    const toast = useToast();
    const router = useRouter();
    const [products, setProducts] = useState<Array<any>>([]);
    const handleGetProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/product/readAll")
            setProducts(res.data)
        } catch (e) {

        }
    }

    useEffect(() => {
        handleGetProducts();
    }, []);

    return (
        <PageTemplate title="Produtos" button={true} buttonText="Cadastrar Produto" destination="/products/cadastrar">
            <TableContainer w="100%">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Preço</Th>
                            <Th>Descrição</Th>
                            <Th colSpan={2}>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products ?
                            products.map((item: any) =>
                                <ProductLi item={item} />
                            )
                            : null}
                    </Tbody>
                </Table>
            </TableContainer>
        </PageTemplate>
    )
}