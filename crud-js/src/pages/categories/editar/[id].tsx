import React, { useMemo, useState } from "react";
import PageTemplate from "../../../components/templates/PageTemplate";
import { Button, Flex, FormControl, FormLabel, Grid, GridItem, Input, Textarea, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import api from "@/services/api";

export default function CadastrarProduto() {
    const router = useRouter();
    const toast = useToast();
    const [category, setCategory] = useState<any>();
    const [name, setName] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const getCategoryById = async () => {
        const res = await api.get(`category/readOne/${router.query.id}`)
        if (res.data.error) return;
        setCategory(res.data)
        setName(res.data.name)
        setDescription(res.data.description)
    }
    useMemo(() => {
        getCategoryById();
    }, [router.query])

    const submitForm = async () => {
        setSubmitting(true)
        console.log(name, price, description, category)
        try {
            if (!name || !description || !category) throw new Error()
            const res = await api.patch(`category/updateOne/${category._id}`, { name, description })
            toast({
                title: "Info",
                status: "info",
                description: "Categoria Atualizada"
            })
            router.push("/categories")
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