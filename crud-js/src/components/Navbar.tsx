
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
export default function Navbar() {
    return (
        <Flex bgColor="white" pl="5" w="100vw" h="10vh" alignItems="center" justifyContent="space-around" flexDir="row">
            <Image src="https://stickersquid.co/wp-content/uploads/2019/10/indio.png" h="10vh" alt="Indio" />
            <Flex flex={2} flexDir="row" alignItems="center">
                <Text fontSize={24} fontWeight="bold">CRUD</Text>
                <Box bgColor="yellow" ml="1"><Text fontSize={24} color="black" outline="1px" fontWeight="bold">JS</Text></Box>
                <Text mx="1">-</Text>
                <Text fontSize={18}>Design Patterns</Text>
            </Flex>
            <Text flex={5}>Teste</Text>
        </Flex>
    )
}