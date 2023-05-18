import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import axios from "axios";
import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { HiPencil, HiTrash } from "react-icons/hi"
import { useRouter } from "next/router";

export default function Products() {
    const toast = useToast();
    const router = useRouter();
    const [products, setProducts] = useState<Array<any>>([]);
    const [deleting, setDeleting] = useState<boolean>(false)
    const handleGetProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/product/readAll")
            setProducts(res.data)
        } catch (e) {

        }
    }
    const handleEditProduct = async (id: any) => {
        try {
            const res = await axios.patch(`http://localhost:3000/api/product/update/${id}`)
            setProducts(res.data.product)
        } catch (e) {

        }
    }
    const handleDeleteProduct = async (id: any) => {
        setDeleting(true)
        try {
            await axios.delete(`http://localhost:3000/api/product/deleteOne/${id}`)
            toast({
                title: "Produto Excluído",
                status: "success"
            })
        } catch (e) {

        } finally { setDeleting(false) }
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
                                <Tr>
                                    <Td>{item.name}</Td>
                                    <Td>R$ {item.price}</Td>
                                    <Td>{item.description}</Td>
                                    <Td><Button colorScheme="pink" onClick={() => { handleEditProduct(item._id) }} ><HiPencil /></Button></Td>
                                    <Td><Button isLoading={deleting} colorScheme="red" bgColor="red" onClick={() => { handleDeleteProduct(item._id) }} ><HiTrash /></Button></Td>
                                </Tr>
                            )
                            : null}
                    </Tbody>
                </Table>
            </TableContainer>
        </PageTemplate>
    )
}