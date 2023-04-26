import Sidebar from "@/components/Sidebar";
import { Flex } from "@chakra-ui/react";

export default function Dashboard(){
  return(
    <Flex backgroundColor="gray.300" height="100vh">
        <Sidebar/>
      <Flex>

      </Flex>
            
    </Flex>
  )
}