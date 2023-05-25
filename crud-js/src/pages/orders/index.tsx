import OrderLi from "@/components/OrderLi";
import api from "@/services/api";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PageTemplate from "../../components/templates/PageTemplate";

export default function Orders() {
    const title = "Pedidos"
    const [orders, setOrders] = useState<any>();

    const readAllOrders = async () => {
        const response = await api.get("order/readAll")
        setOrders(response.data);
    }

    useEffect(() => {
        readAllOrders();
    }, [])

    return (
        <PageTemplate title={title}>
            <TableContainer  w="100%">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>id do pedido</Th>
                            <Th>produtos</Th>
                            <Th>Cliente</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders ?
                            orders.map((item: any) => {
                                return <OrderLi order={item} />
                            })

                            : null}
                    </Tbody>
                </Table>
            </TableContainer>

        </PageTemplate>
    )
}