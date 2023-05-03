import React, { useEffect } from "react";
import PageTemplate from "./templates/PageTemplate";

export default function Products() {
    const title = "Produtos"
    const handleGetProducts = async () => {

    }

    useEffect(() => {
        handleGetProducts();
    }, []);
    return (
        <PageTemplate title="Pedidos">

        </PageTemplate>
    )
}