import { Td, Tr } from "@chakra-ui/react";

export default function OrderLi(props: any) {
    const { order } = props;
    return (
        <Tr>
            <Td>{order._id}</Td>
            <Td>{order.products.map((item: any) => item.name).join()}</Td>
            <Td>{order.customer_name}</Td>
        </Tr>
    )
}