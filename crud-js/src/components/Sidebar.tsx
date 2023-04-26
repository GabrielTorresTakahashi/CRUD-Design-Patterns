import { Box, Card, CardBody, CardHeader, Center, Flex, HStack, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RxArchive, RxReader, RxRows, RxHome } from "react-icons/rx";
import { useRouter } from 'next/router'

export default function Sidebar() {
    const router = useRouter();
    const isActiveDashboard = router.pathname == "/"
    const isActiveProducts = router.pathname == "/products"
    const isActiveCategories = router.pathname == "/categories"
    const isActiveOrders = router.pathname == "/orders"
    return (
        <Card alignSelf="center" left="2%" colorScheme="green" height="75%" width="30%">
            <CardHeader>
                <Heading size='lg'>CRUD JS - DESIGN PATTERNS</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Flex flexDirection="column" justify="space-between">
                            <HStack pt={6}>
                                <RxHome size="20px" color={isActiveDashboard ? "green" : "gray"} />
                                <Text
                                    fontSize='lg'
                                    fontWeight="semibold"
                                    color={isActiveDashboard ? "green" : "gray"}
                                >
                                    <Link href={"/"}>Dashboard</Link>
                                </Text>
                            </HStack>
                        </Flex>
                        <Heading size='md' textTransform='uppercase'>
                            Cadastros
                        </Heading>
                        <Flex pl={3} flexDirection="column" justify="space-between">
                            <HStack pt={6}>
                                <RxArchive size="20px" />
                                <Text
                                    fontSize='lg'
                                    fontWeight="semibold"
                                    color={isActiveProducts ? "green" : "gray"}
                                >
                                    <Link href={"/products"}>Produtos</Link>
                                </Text>
                            </HStack>
                            <HStack pt={6}>
                                <RxRows size="20px" />
                                <Text
                                    fontSize='lg'
                                    fontWeight="semibold"
                                    color={isActiveProducts ? "green" : "gray"}
                                >
                                    <Link href={"/categories"}>Categorias de Produtos</Link>
                                </Text>
                            </HStack>
                            <HStack pt={6}>
                                <RxReader size="20px" />
                                <Text
                                    fontSize='lg'
                                    fontWeight="semibold"
                                    color={isActiveProducts ? "green" : "gray"}
                                >
                                    <Link href={"/orders"}>Pedidos</Link>
                                </Text>
                            </HStack>
                        </Flex>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}