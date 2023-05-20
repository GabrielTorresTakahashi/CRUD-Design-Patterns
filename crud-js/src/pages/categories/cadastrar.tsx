import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import { Button, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Products() {
    const router = useRouter()
    const toast = useToast();
    const [name, setName] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [description, setDescription] = useState("")
    const submitForm = async () => {
        setSubmitting(true)
        try {
            if (!name || !description) throw new Error()
            await axios.post("http://localhost:3000/api/category/save", { name, description })
            toast({
                title: "Info",
                status: "info",
                description: "Categoria cadastrada"
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
        <PageTemplate title="Cadastrar Categoria">
            <Flex w="100%" p={8}>
                <FormControl>
                    <Grid templateColumns={"repeat(2, 1fr)"} gap={16}>
                        <GridItem>
                            <FormLabel>Nome</FormLabel>
                            <Input onChange={(e: any) => setName(e.target.value)} placeholder="Ex: Sapatos" />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea resize={"none"} onChange={(e: any) => setDescription(e.target.value)} placeholder="Descrição da categoria" />
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