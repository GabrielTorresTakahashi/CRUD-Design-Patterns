import React, { useMemo, useState } from "react";
import PageTemplate from "../../../components/templates/PageTemplate";
import { Button, Flex, FormControl, FormLabel, Grid, GridItem, Input, Textarea, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import api from "@/services/api";

export default function CadastrarProduto() {
    const router = useRouter();
    const toast = useToast();
    const [product, setProduct] = useState<any>();
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
    }
    useMemo(() => {
        getProductById();
    }, [router.query])
    const submitForm = async () => {
        setSubmitting(true)
        console.log(name, price, description, product)
        try {
            if (!name || !price || !description || !product) throw new Error()
            const res = await api.patch(`product/updateOne/${product._id}`, { name, price, description })
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
    return (
        <PageTemplate title="Cadastrar Produto" button={false} buttonText="Cadastrar Produto" destination="/products/cadastrar">
            <Flex w="100%" p={8}>
                <FormControl>
                    <Grid templateColumns={"repeat(2, 1fr)"} gap={16}>
                        <GridItem>
                            <FormLabel>Nome</FormLabel>
                            <Input onChange={(e: any) => setName(e.target.value)} value={name} placeholder="Ex: Tênis preto" />
                        </GridItem>
                        <GridItem>
                            <FormLabel>Preço</FormLabel>
                            <Input onChange={(e: any) => setPrice(Math.abs((e.target.value)).toString())} value={price} type='number' placeholder="16,99" />
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