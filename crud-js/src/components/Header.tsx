
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from 'next/image'
import React from "react";
import { RiGroupFill } from "react-icons/ri";
import Indio from "../../public/indio.png"
export default function Header() {
    return (
        <Flex
            as="header"
            bgColor="white"
            h="10vh"
            px="8"
            shadow="0 0 20px rgba(0, 0, 0, 0.05)"
            alignItems="center"
        >
            <Flex
                alignItems="center"
                w="60"
                mr="8"
            >
                <Flex h="10vh" w="5vw" position="relative">
                    <Image
                        src={Indio}
                        alt="Indígena"
                        fill
                    />
                </Flex>
                <Text ml="8" fontWeight="bold" fontSize={22}>
                    CRUD.JS
                </Text>
            </Flex>
            <Flex
                as="label"
                cursor="text"
                flex="1"
                ml="8"
                alignSelf="center"
                position="relative"
                fontSize="18"
            >
                <Text fontWeight="semibold" fontSize={24}>
                    DESIGN PATTERNS
                </Text>
            </Flex>
            <Flex>
                <Link>
                    <RiGroupFill />
                    Integrantes do Grupo
                </Link>
            </Flex>
        </Flex>
    )
}