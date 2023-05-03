import Header from "@/components/Header";
import Navbar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

export default function Config() {
    const title = "Configurações"
    return (
        <>
        <Title title={title} />
        <Header />
        <Flex
            direction="column"
            h="100vh"
            bgColor="pink.100"
        >
            <Grid
                templateRows="repeat(5,1fr)"
                templateColumns="repeat(2,1fr)"
                h="200px"
                my="6"
            >
                <GridItem
                    rowSpan={2}
                    colSpan={1}
                >
                    <Sidebar />
                </GridItem>
                <GridItem
                    ml="350"
                    h="50px"
                    colSpan={4}
                    gap={6}
                >
                    <Flex
                        w="100%"
                        justifyContent="space-between">
                        <Heading
                            size="md"
                            my="2"
                        >
                            {title}
                        </Heading>
                    </Flex>
                </GridItem>
                <GridItem
                    colSpan={4}
                    ml="350"
                    mr="10"
                >
                    <Flex
                        bgColor="white"
                        py="4"
                        shadow="0 0 20px rgba(0, 0, 0, 0.05)"
                        borderRadius={4}
                        justifyContent={'center'}
                        h="66vh"
                    >
                        
                    </Flex>
                </GridItem>

            </Grid>

        </Flex>
    </>
    )
}