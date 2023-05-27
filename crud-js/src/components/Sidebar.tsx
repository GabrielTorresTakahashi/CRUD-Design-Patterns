import { VStack, Link, Text, Flex } from "@chakra-ui/react";
import {
    RiSettings2Line,
    RiHome2Line,
    RiInboxArchiveLine,
    RiBarChartHorizontalFill,
    RiFilePaper2Line
} from "react-icons/ri";

import { useRouter } from "next/router";
import React from "react";

export default function Sidebar() {
    const router = useRouter();

    const signOut = () => {
        router.push("/");
    };

    const isActiveDashboard = router.pathname === "/dashboard";
    const isActiveProductTray = router.pathname === "/products";
    const isActiveProducts = router.pathname === "/categories";
    const isActiveOrders = router.pathname === "/orders";
    const isActiveConfig = router.pathname === "/config";

    return (
        <Flex
            as="aside"
            w="72"
            bgColor="white"
            py="8"
            mx="6"
            shadow="0 0 20px rgba(0, 0, 0, 0.05)"
            borderRadius={4}
            direction="column"
        >
            <VStack spacing="4" pr="8" alignItems="stretch">
                <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
                    GERAL
                </Text>
                <Link
                    href={"/dashboard"}
                    display="flex"
                    alignItems="center"
                    color={isActiveDashboard ? "purple.500" : "gray.500"}
                    py="1"
                    pl={8}
                    borderLeft={isActiveDashboard ? "3px solid" : "transparent"}
                >
                    <RiHome2Line size="20" />
                    <Text ml="4" fontSize="medium" fontWeight="medium">
                        Dashboard
                    </Text>
                </Link>
            </VStack>
            <VStack spacing="4" pr="8" mt={8} alignItems="stretch">
                <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
                    CADASTROS
                </Text>
                <Link
                    href={"/products"}
                    display="flex"
                    alignItems="center"
                    py="1"
                    pl={8}
                    color={isActiveProductTray ? "purple.500" : "gray.500"}
                    borderLeft={isActiveProductTray ? "3px solid" : "transparent"}
                >
                    <RiInboxArchiveLine size="20" />
                    <Text ml="4" fontSize="medium" fontWeight="medium">
                        Produtos
                    </Text>
                </Link>
                <Link
                    href={"/categories"}
                    display="flex"
                    alignItems="center"
                    py="1"
                    pl={8}
                    color={isActiveProducts ? "purple.500" : "gray.500"}
                    borderLeft={isActiveProducts ? "3px solid" : "transparent"}
                >
                    <RiBarChartHorizontalFill size="20" />
                    <Text ml="4" fontSize="medium" fontWeight="medium">
                        Categorias
                    </Text>
                </Link>
                <Link
                    href={"/orders"}
                    display="flex"
                    alignItems="center"
                    py="1"
                    pl={8}
                    color={isActiveOrders ? "purple.500" : "gray.500"}
                    borderLeft={isActiveOrders ? "3px solid" : "transparent"}
                >
                    <RiFilePaper2Line size="20" />
                    <Text ml="4" fontSize="medium" fontWeight="medium">
                        Pedidos
                    </Text>
                </Link>
            </VStack>
            {/* <>
                <VStack spacing="4" pr="8" mt={8} alignItems="stretch">
                    <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
                        SISTEMA
                    </Text>
                    <Link
                        href={"/config"}
                        display="flex"
                        alignItems="center"
                        py="1"
                        pl={8}
                        color={isActiveConfig ? "purple.500" : "gray.500"}
                        borderLeft={isActiveConfig ? "3px solid" : "transparent"}
                    >
                        <RiSettings2Line size="20" />
                        <Text ml="4" fontSize="medium" fontWeight="medium">
                            Configurações
                        </Text>
                    </Link>
                </VStack>
            </> */}
        </Flex>
    );
}