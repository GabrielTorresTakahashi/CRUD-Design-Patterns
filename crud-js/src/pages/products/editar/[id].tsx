import React, { useEffect, useMemo, useState } from "react";
import PageTemplate from "../../../components/templates/PageTemplate";
import { Button, Flex, FormControl, FormLabel, Grid, GridItem, Input, Select, Textarea, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import api from "@/services/api";

export default function CadastrarProduto() {
    const router = useRouter();
    const toast = useToast();
    const [product, setProduct] = useState<any>();
    const [categories, setCategories] = useState<Array<any>>([])
    const [category, setCategory] = useState<any>("")
    const [name, setName] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const getProductById = async () => {
        const res = await api.get(`product/readOne/${router.query.id}`)
        if (res.data.error) return;
        setProduct(res.data)
        setName(res.data.name)
        setPrice(res.data.price)
        setDescription(res.data.description)
        setCategory(res.data.category._id)
    }
    const getCategories = async () => {
        const categories = await api.get("category/readAll");
        setCategories(categories.data)
    }
    const submitForm = async () => {
        setSubmitting(true)
        try {
            if (!name || !price || !description || !product || !category) throw new Error()
            const res = await api.patch(`product/updateOne/${product._id}`, { name, price, description, category })
            toast({
                title: "Info",
                status: "info",
                description: "Produto Atualizado"
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
    useMemo(() => {
        getProductById();
    }, [router.query])

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <PageTemplate title="Cadastrar Produto" button={false} buttonText="Cadastrar Produto" destination="/products/cadastrar">
            <Flex w="100%" p={8}>
                <FormControl>
                    <Grid templateColumns={"repeat(2, 1fr)"} gap={8}>
                        <GridItem>
                            <FormLabel>Nome</FormLabel>
                            <Input onChange={(e: any) => setName(e.target.value)} value={name} placeholder="Ex: Tênis preto" />
                        </GridItem>
                        <GridItem>
                            <FormLabel>Preço</FormLabel>
                            <Input onChange={(e: any) => setPrice(Math.abs((e.target.value)).toString())} value={price} type='number' placeholder="16,99" />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Categoria</FormLabel>
                            <Select placeholder="-Selecione-" value={category} onChange={(e: any) => setCategory(e.target.value)}>
                                {categories.map((item: any) => <option value={item._id}>{item.name}</option>)}
                            </Select>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea resize={"none"} onChange={(e: any) => setDescription(e.target.value)} value={description} placeholder="Descrição do produto" />
                        </GridItem>
                        <GridItem>
                            <Button
                                colorScheme="pink"
                                onClick={() => { submitForm() }}
                                isLoading={submitting}
                            >
                                Enviar
                            </Button>
                        </GridItem>
                    </Grid>
                </FormControl>
            </Flex>
        </PageTemplate>
    )
}