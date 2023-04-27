import Sidebar from "@/components/Sidebar";
import { Flex, Heading } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <Flex backgroundColor="gray.300" height="100vh">
            <Flex h="80vh" alignSelf="center">
                <Sidebar />
            </Flex>
            <Flex>
            </Flex>
        </Flex>)
}