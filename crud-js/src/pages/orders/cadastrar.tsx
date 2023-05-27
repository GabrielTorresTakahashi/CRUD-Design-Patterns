import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import { Button, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Input, Select, Text, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import api from "@/services/api";

export default function Products() {
    const router = useRouter()
    const toast = useToast();
    const [submitting, setSubmitting] = useState(false)
    const [products, setProducts] = useState<any>([]);
    const [orderProducts, setOrderProducts] = useState<any>([null, null, null, null]);
    const [orderName, setOrderName] = useState<string>("");

    const getProducts = async () => {
        try {
            const response = await axios.get("/api/product/readAll");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const submitForm = async () => {
        setSubmitting(true)
        try {
            await api.post("/order/save", {
                products: orderProducts,
                customer_name: orderName,
            });
            toast({
                title: "Info",
                status: "info",
                description: "Pedido cadastrado"
            });
            setTimeout(() => { router.push("/orders") }, 500)

        } catch (error) {
            console.log(error)
            toast({
                title: "Erro!",
                status: "error",
                description: "Não foi possível cadastrar"
            });
        } finally { setSubmitting(false); }
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <PageTemplate title="Cadastrar Categoria" >
            <Flex w="100%" p={8}>
                <FormControl isRequired>
                    <Grid templateColumns={"repeat(2, 1fr)"} gap={16}>
                        <GridItem>
                            <FormLabel>Produto 1</FormLabel>
                            <Select
                                placeholder="-Selecione-"
                                onChange={(e: any) => {
                                    let arr = orderProducts;
                                    arr[0] = e.target.value;
                                    setOrderProducts(arr);
                                }}>
                                {products.map((item: any) => {
                                    return <option key={item._id} value={item._id}>{item.name}</option>
                                })}
                            </Select>
                        </GridItem>
                        <GridItem>
                            <FormLabel>Produto 2</FormLabel>
                            <Select
                                placeholder="-Selecione-"
                                onChange={(e: any) => {
                                    let arr = orderProducts;
                                    arr[1] = e.target.value;
                                    setOrderProducts(arr);
                                }}>
                                {products.map((item: any) => {
                                    return <option key={item._id} value={item._id}>{item.name}</option>
                                })}
                            </Select>
                        </GridItem>
                        <GridItem>
                            <FormLabel>Produto 3</FormLabel>
                            <Select
                                placeholder="-Selecione-"
                                onChange={(e: any) => {
                                    let arr = orderProducts;
                                    arr[2] = e.target.value;
                                    setOrderProducts(arr);
                                }}>
                                {products.map((item: any) => {
                                    return <option key={item._id} value={item._id}>{item.name}</option>
                                })}
                            </Select>
                        </GridItem>
                        <GridItem>
                            <FormLabel>Produto 4</FormLabel>
                            <Select
                                placeholder="-Selecione-"
                                onChange={(e: any) => {
                                    let arr = orderProducts;
                                    arr[3] = e.target.value;
                                    setOrderProducts(arr);
                                }}>
                                {products.map((item: any) => {
                                    return <option key={item._id} value={item._id}>{item.name}</option>
                                })}
                            </Select>
                        </GridItem>
                        <GridItem>
                            <FormLabel>Nome do Cliente</FormLabel>
                            <Input onChange={(e) => { setOrderName(e.target.value) }}></Input>
                        </GridItem>
                        <GridItem>
                            <Button
                                bottom={0}
                                colorScheme="pink"
                                onClick={() => { submitForm() }}
                                isLoading={submitting}
                            >
                                Pedir
                            </Button>
                        </GridItem>
                    </Grid>
                </FormControl>
            </Flex>
        </PageTemplate>
    )
}