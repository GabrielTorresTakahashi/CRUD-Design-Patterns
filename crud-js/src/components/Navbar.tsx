
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from 'next/image'
import React from "react";
import { RiGroupFill } from "react-icons/ri";
import Indio from "../../public/indio.png"
export default function Navbar() {
    return (
        <Flex position="absolute" bgColor="white" pl="5" w="100vw" h="10vh" alignItems="center" justifyContent="space-between" flexDir="row">
            <Image
                src={Indio}
                alt="Indígena"
                height={80}
            />
            <Flex flex={2} flexDir="row" alignItems="center">
                <Text fontSize={24} fontWeight="bold">CRUD</Text>
                <Box bgColor="yellow" ml="1"><Text fontSize={24} color="black" outline="1px" fontWeight="bold">JS</Text></Box>
                <Text mx="1">-</Text>
                <Text fontSize={18}>Design Patterns</Text>
            </Flex>
            <Link href={"/integrantes"}>
                <Flex flexDir="row" alignItems="center" mr="5">
                    <Text>Integrantes do Grupo</Text>
                    <RiGroupFill />
                </Flex>
            </Link>
        </Flex>
    )
}