import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Box, Flex, Heading, Skeleton, Text, VisuallyHidden } from "@chakra-ui/react";
import React from "react";

export default function Dashboard() {
    return (
        <Flex backgroundColor="green.100" height="100vh">
            <Flex alignSelf="start" flexDir="column">
                <Navbar/>
                <Box my="10vh">
                    <Sidebar />
                </Box>
            </Flex>

            <Flex>
            </Flex>

        </Flex>)
}