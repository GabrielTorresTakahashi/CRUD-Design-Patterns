import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import { Flex, Text, } from "@chakra-ui/react";
import React from "react";

export default function Products() {
    return (
        <Flex backgroundColor="pink.100" height="100vh">
            <Title title={"Produtos"} />
            <Navbar />
            <Sidebar />
            <Flex mt="100" ml="350" flexDir="column">
                <Flex w="100vw">
                    <Text>Produtos</Text>
                </Flex>
                <Flex w="75vw" bgColor="white" h="75vh">
                </Flex>
            </Flex>
        </Flex>
    )
}