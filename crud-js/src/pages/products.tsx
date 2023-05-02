import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import { Box, Flex, Grid, GridItem, Skeleton, Text, } from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function Products() {
    const handleGetProducts = async ()=>{
        
    }

    useEffect(()=>{
        handleGetProducts();
    },[]);
    return (
        <Flex backgroundColor="pink.100" height="100vh">
            <Title title={"Produtos"} />
            <Flex alignSelf="start" flexDir="column">
                <Navbar />
                <Sidebar />
                <Flex flexDir="row" w="100vw" ml="30vw" mt="10vh">
                    <Text
                        position="absolute"
                        top="13vh"
                        fontWeight="semibold"
                        fontSize="22">
                        Produtos
                    </Text>
                    <Box bgColor="white" w="68vw" h="70vh" position="absolute">

                    </Box>
                </Flex>
            </Flex>
            <Flex>
            </Flex>
        </Flex>
    )
}