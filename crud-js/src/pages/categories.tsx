import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function Dashboard() {
    return (
        <Flex backgroundColor="green.100" height="100vh">
            <Title title={"Categorias"} />
            <Flex alignSelf="start" flexDir="column">
                <Navbar />
                <Box my="10vh">
                    <Sidebar />
                </Box>
            </Flex>
            <Flex>
            </Flex>
        </Flex>
    )
}