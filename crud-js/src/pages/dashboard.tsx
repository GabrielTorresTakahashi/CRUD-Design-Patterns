import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import { Box, Flex, Heading, Skeleton, Text, VisuallyHidden } from "@chakra-ui/react";
import React from "react";

export default function Dashboard() {
    return (
        <Flex backgroundColor="pink.100" height="100vh">
            <Title title={"Dashboard"} />
            <Navbar />
            <Flex alignSelf="start" flexDir="column">
                <Box my="10vh">
                    <Sidebar />
                </Box>
            </Flex>
            <Flex>
            </Flex>
        </Flex>)
}