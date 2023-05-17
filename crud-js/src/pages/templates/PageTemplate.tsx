import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import { Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function PageTemplate(props: any) {
    const { title, destination, buttonText, button, children} = props;
    const router = useRouter();
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
                            pr="10"
                            justifyContent="space-between">
                            <Heading
                                size="md"
                                my="2"
                            >
                                {title}
                            </Heading>
                            {button ?
                                <Button colorScheme="pink" onClick={() => { router.push(destination) }}>
                                    {buttonText}
                                </Button>
                                : null}

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
                            {children}
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    )
}