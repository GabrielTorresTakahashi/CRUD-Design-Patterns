import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import { Button, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Input, Select, Text, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import api from "@/services/api";

export default function CadastrarProduto() {
    const router = useRouter();
    const toast = useToast();
    const [categories, setCategories] = useState<Array<any>>([])
    const [category, setCategory] = useState<any>("")
    const [name, setName] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const submitForm = async () => {
        setSubmitting(true)
        try {
            if (!name || !price || !description || !category) throw new Error()
            const res = await axios.post("http://localhost:3000/api/product/save", { name, price, description, category })
            toast({
                title: "Info",
                status: "info",
                description: "Produto cadastrado"
            })
            router.push("/products")
        } catch (error) {
            toast({
                title: "Erro!",
                status: "error",
                description: "Não foi possível cadastrar"
            })
        } finally { setSubmitting(false) }
    }

    const getCategories = async () => {
        const categories = await api.get("category/readAll");
        setCategories(categories.data)
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <PageTemplate title="Cadastrar Produto" button={false} buttonText="Cadastrar Produto" destination="/products/cadastrar">
            <Flex w="100%" p={8}>
                <FormControl isRequired>
                    <Grid templateColumns={"repeat(2, 1fr)"} gap={8}>
                        <GridItem>
                            <FormLabel>Nome</FormLabel>
                            <Input onChange={(e: any) => setName(e.target.value)} placeholder="Ex: Tênis preto" />
                        </GridItem>
                        <GridItem>
                            <FormLabel>Preço</FormLabel>
                            <Input onChange={(e: any) => setPrice(Math.abs((e.target.value)).toString())} type='number' placeholder="16,99" />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Categoria</FormLabel>
                            <Select placeholder="-Selecione-" onChange={(e) => setCategory(e.target.value)}>
                                {categories.map((item: any) => <option value={item._id}>{item.name}</option>)}
                            </Select>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea resize={"none"} onChange={(e: any) => setDescription(e.target.value)} placeholder="Descrição do produto" />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Flex w="100%" justifyContent={"center"}>
                                <Button
                                    w="50%"
                                    colorScheme="pink"
                                    onClick={() => { submitForm() }}
                                    isLoading={submitting}
                                >
                                    Enviar
                                </Button>
                            </Flex>
                        </GridItem>
                    </Grid>
                </FormControl>
            </Flex>
        </PageTemplate>
    )
}