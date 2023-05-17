import React, { useEffect, useState } from "react";
import PageTemplate from "../templates/PageTemplate";
import { Button, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";

export default function Products() {
    const title = "Produtos"
    const toast = useToast();
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const submitForm = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/product/save", { name, price, description })
            console.log(res.data)
            toast({
                title: "Info",
                status: "info",
                description: "Produto cadastrado"
            })
        } catch (error) {
            toast({
                title: "Erro!",
                status: "error",
                description: "Não foi possível cadastrar"
            })
        }
    }
    return (
        <PageTemplate title="Cadastrar Produto" button={false} buttonText="Cadastrar Produto" destination="/products/cadastrar">
            <Flex w="100%" p={8}>
                <FormControl>
                    <Grid templateColumns={"repeat(2, 1fr)"} gap={16}>
                        <GridItem>
                            <FormLabel>Nome</FormLabel>
                            <Input onChange={(e) => setName(e.target.value)} placeholder="Ex: Tênis preto" />
                        </GridItem>
                        <GridItem>
                            <FormLabel>Preço</FormLabel>
                            <Input onChange={(e) => setPrice(e.target.value)} type='number' placeholder="16,99" />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea resize={"none"} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição do produto" />
                        </GridItem>
                        <GridItem>
                            <Button colorScheme="pink" onClick={() => { submitForm() }}>
                                Enviar
                            </Button>
                        </GridItem>
                    </Grid>
                </FormControl>
            </Flex>
        </PageTemplate>
    )
}