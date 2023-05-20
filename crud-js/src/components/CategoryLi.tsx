import api from "@/services/api";
import { Button, Td, Tr, useToast } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";

export default function ProductLi(props: any) {
    const router = useRouter();
    const [deleting, setDeleting] = useState<boolean>(false)
    const [display, toggleDisplay] = useState<boolean>(true)
    const toast = useToast();
    const { item } = props
    const handleEditCategory = async (id: any) => {
        try {
            router.push(`categories/editar/${id}`)
        } catch (e) {

        }
    }

    const handleDeleteCategory = async (id: any) => {
        setDeleting(true)
        try {
            await api.delete(`category/deleteOne/${id}`)
            toast({
                title: "Categoria Excluída",
                status: "success"
            })
            toggleDisplay(!display);
        } catch (e) {

        } finally { setDeleting(false) }
    }
    return (
        <Tr display={display ? "table-row" : "none"}>
            <Td>{item.name}</Td>
            <Td>{item.description}</Td>
            <Td><Button colorScheme="pink" onClick={() => { handleEditCategory(item._id) }} ><HiPencil /></Button></Td>
            <Td><Button isLoading={deleting} colorScheme="red" bgColor="red" onClick={() => { handleDeleteCategory(item._id) }} ><HiTrash /></Button></Td>
        </Tr>
    )
}