import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import axios from "axios";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import CategoryLi from "@/components/CategoryLi";

export default function Categories() {
    const toast = useToast()
    const [products, setProducts] = useState<Array<any>>([]);
    const handleGetCategories = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/category/readAll")
            setProducts(res.data)
        } catch (e: any) {
            toast({
                title: "Erro",
                status: "error",
                description: "Não foi possível obter os dados"
            })
        }
    }

    useEffect(() => {
        handleGetCategories();
    }, []);
    return (
        <PageTemplate title="Categorias" button={true} buttonText="Cadastrar Categoria" destination="/categories/cadastrar">
            <TableContainer w="100%">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Descrição</Th>
                            <Th colSpan={2}>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products ?
                            products.map((item: any) => {
                                if (item.name != null) {
                                    return <CategoryLi key={item._id} item={item} />
                                }
                                return null
                            })
                            : null}
                    </Tbody>
                </Table>
            </TableContainer>
        </PageTemplate>
    )
}